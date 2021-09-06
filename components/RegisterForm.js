import {useState} from 'react';
import axios from 'axios';
import Input from 'components/Input';
import {getErrorMessage, checkMessage} from 'utility/ValidationMessage';

function RegisterForm({data, fields = [], apiurl = ''}) {
  const [formData, setFormData] = useState(data);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage(getErrorMessage(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        {fields.map((item, index) => {
          return (
            <div className='col-md-6'>
              <Input
                iconname={item.iconname}
                label={item.label}
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                handleChange={handleChange}
                required={true}
                errMessage={errorMessage[item.name]}
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
