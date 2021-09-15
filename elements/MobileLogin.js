import {useState} from 'react';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import Input from 'components/Input';
import {userService} from 'services/user.services';

function MobileLogin(props) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [validUserMsg, setValidUserMsg] = useState('');

  const onSubmit = async (formData) => {
    alert(JSON.stringify(formData));
    setValidUserMsg(null);
    const {mobile} = formData;

    /*
    userService
      .login(email, password)
      .then(() => {
        const returnUrl = router.query.returnUrl || '/expert/dashboard';
        router.push(returnUrl);
      })
      .catch((error) => setValidUserMsg(error));
      */
  };
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            iconname='mobile'
            label='Mobile No.'
            name='mobile'
            type='text'
            placeholder='Enter Mobile Number...'
            register={register}
            required
            errors={errors}
          />
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
        </form>
      </div>
    </div>
  );
}

export default MobileLogin;
