import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router';
import Spinner from 'react-bootstrap/Spinner';
import Input from 'components/Input';
import {userService} from 'services/user.services';

function RegisterForm({fields = [], formValidator}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setErrMsg(null);
    setLoading(true);

    userService
      .register(formData)
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

        {fields.map((item, index) => {
          return (
            <div className='col-md-4' key={item.label}>
              <Input
                iconname={item.iconname}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                required={item.required}
                register={register}
                errors={errors}
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
              <i className='fa fa-angle-right m-r10'></i>Register
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
