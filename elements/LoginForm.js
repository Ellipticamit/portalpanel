import {useState} from 'react';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import Input from 'components/Input';
import {userService} from 'services/user.services';

function LoginForm(props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [validUserMsg, setValidUserMsg] = useState('');

  const onSubmit = async (formData) => {
    // alert(JSON.stringify(formData));
    setValidUserMsg(null);
    const {email, password} = formData;

    userService
      .login(email, password)
      .then(() => {
        const returnUrl = router.query.returnUrl || '/expert/dashboard';
        router.push(returnUrl);
      })
      .catch((error) => setValidUserMsg(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        {validUserMsg && (
          <div className='col-sm-12'>
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
          <button
            name='submit'
            type='submit'
            propvalue='Submit'
            className='btn2 btn2-link d-inline-flex align-items-center'
          >
            <i className='fa fa-angle-right m-r10'></i>Login
          </button>
        </div>
      </div>
      <div className='m-t20 danger__text'>
        <span className='required'>*</span> Fields are mandatory.
      </div>
    </form>
  );
}

export default LoginForm;
