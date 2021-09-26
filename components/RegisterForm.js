import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router';
import Spinner from 'react-bootstrap/Spinner';
import Input from 'components/Input';
import {userService} from 'services/user.services';

function RegisterForm({
  fields = [],
  colstyle = 'col-md-4',
  values = {},
  registerbutton = 'Register',
  submit_type = 'register',
  uid = '',
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [errMsg, setErrMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (formData) => {
    setErrMsg(null);
    setLoading(true);

    if (submit_type === 'register') registerSubmit(formData);
    else updateSubmit(formData);
  };

  const registerSubmit = async (data) => {
    userService
      .register(data)
      .then((response) => {
        const {data} = response;
        const {userData, message} = data;
        setLoading(false);
        if (message === 'success') {
          const {id} = userData;
          const returnUrl = `/expert/register/${id}/complete-profile`;
          router.push(returnUrl);
        }
      })
      .catch((error) => {
        setLoading(false);
        setErrMsg(error);
      });
  };

  const updateSubmit = async (data) => {
    data['uid'] = uid;
    userService
      .updateUser(data)
      .then((response) => {
        setSuccessMsg('Account Details Successfully Updated.');

        setTimeout(() => {
          router.reload(window.location.pathname);
        }, 1000);
      })
      .catch((error) => {});
    setLoading(false);
  };

  console.log('values = ', values);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        {errMsg && (
          <div className='col-md-12'>
            <div className='alert alert-danger' role='alert'>
              {errMsg}
            </div>
          </div>
        )}

        {successMsg && (
          <div className='col-md-12'>
            <div className='alert alert-success' role='alert'>
              {successMsg}
            </div>
          </div>
        )}

        {fields.map((item, index) => {
          return (
            <div className={colstyle} key={item.label}>
              <Input
                iconname={item.iconname}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                required={item.required}
                register={register}
                errors={errors}
                propvalue={values[item.name]}
              />
            </div>
          );
        })}

        <div className='col-sm-12 mt-2'>
          {loading ? (
            <Spinner
              animation='border'
              variant='primary'
              role='status'
            ></Spinner>
          ) : (
            <button
              name='submit'
              type='submit'
              propvalue='Submit'
              className='btn2 btn2-link d-inline-flex align-items-center'
            >
              <i className='fa fa-angle-right m-r10'></i>
              {registerbutton}
            </button>
          )}
        </div>
      </div>

      <div className='m-t20 danger__text'>
        <span className='required'>*</span> Fields are mandatory.
      </div>
    </form>
  );
}

export default RegisterForm;
