import {useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import Input from 'components/Input';

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [validUserMsg, setValidUserMsg] = useState('');

  const onSubmit = async (data) => {
    alert(JSON.stringify(data));

    const response = await axios.post('/api/login', formData);

    const {
      data: {success, message},
    } = response;

    if (!success) {
      setValidUserMsg(message);
    } else {
      setValidUserMsg('');
      const {userdata} = response.data;
      console.log(userdata);
    }
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
