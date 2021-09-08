import {useState} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';

import Input from 'components/Input';

function RegisterForm({fields = [], apiurl = ''}) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [alreadyMessage, setAlreadyMessage] = useState(null);

  const onSubmit = async (formData) => {
    alert(JSON.stringify(data));
    const response = await axios.post('/api/register', formData);
    const {data} = response;
    const {apiData, message} = data;

    if (!apiData) {
      console.log('errors', message);
      setAlreadyMessage(message);
    } else {
      if (message === 'success') {
        setSubmitSuccess(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        {alreadyMessage && (
          <div className='col-md-12'>
            <div className='alert alert-warning' role='alert'>
              {alreadyMessage} Try to
              <a href='/' className='primary_link'>
                {' '}
                Login
              </a>
            </div>
          </div>
        )}

        {fields.map((item, index) => {
          return (
            <div className='col-md-6' key={item.label}>
              <Input
                iconname={item.iconname}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                required={true}
                register={register}
                errors={errors}
              />
            </div>
          );
        })}

        <div className='col-sm-12 mt-2'>
          <button
            name='submit'
            type='submit'
            propvalue='Submit'
            className='btn2 btn2-link d-inline-flex align-items-center'
          >
            <i className='fa fa-angle-right m-r10'></i>Register
          </button>
        </div>
      </div>

      <div className='m-t20 danger__text'>
        <span className='required'>*</span> Fields are mandatory.
      </div>
    </form>
  );
}

export default RegisterForm;
