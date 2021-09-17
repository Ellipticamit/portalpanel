import {useState} from 'react';
import {useRouter} from 'next/router';
import Spinner from 'react-bootstrap/Spinner';
import {useForm} from 'react-hook-form';
import Input from 'components/Input';
import {userService} from 'services/user.services';
import MobileLogin from 'elements/MobileLogin';

const filterErrorMsg = (msg) => {
  if (msg === 'Email is incorrect.' || msg === 'Password is incorrect.') {
    return msg;
  }
  return 'Error Occurs. Try Again';
};

function LoginForm(props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [validUserMsg, setValidUserMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setValidUserMsg(null);
    const {email, password} = formData;
    setLoading(true);
    userService
      .login(email, password)
      .then(() => {
        setLoading(false);
        const returnUrl = router.query.returnUrl || '/expert/dashboard';
        router.push(returnUrl);
      })
      .catch((error) => {
        setLoading(false);
        setValidUserMsg(filterErrorMsg(error));
      });
  };

  return (
    <div className='login-page'>
      <MobileLogin />
      <hr className='hr-text' data-content='OR' />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row'>
          {validUserMsg && (
            <div className='col-sm-12 mt-3'>
              <div className='alert alert-danger' role='alert'>
                {validUserMsg}
              </div>
            </div>
          )}
          <div className='col-sm-12'>
            <Input
              iconname='envelope'
              label='Email'
              name='email'
              type='text'
              placeholder='Enter Email...'
              register={register}
              required
              errors={errors}
            />
          </div>
          <div className='col-sm-12'>
            <Input
              iconname='lock'
              label='Password'
              name='password'
              type='password'
              placeholder='Enter Password...'
              register={register}
              required
              errors={errors}
            />
          </div>

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
                <i className='fa fa-angle-right m-r10'></i>Login
              </button>
            )}
          </div>
        </div>
      </form>

      <div className='m-t20 danger__text'>
        <span className='required'>*</span> Fields are mandatory.
      </div>
    </div>
  );
}

export default LoginForm;
