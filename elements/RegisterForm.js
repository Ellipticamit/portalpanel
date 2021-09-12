import {useState} from 'react';
import axios from 'axios';
import Input from 'components/Input';
import {getErrorMessage, checkMessage} from 'utility/ValidationMessage';

const data = {
  name: '',
  email: '',
  mobile: '',
  password: '',
  experience: '',
  expertise: '',
};

function RegisterForm(props) {
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

    const errMessageObj = getErrorMessage(formData);
    if (checkMessage(errMessageObj)) {
      setErrorMessage(errMessageObj);
    } else {
      const response = await axios.post('/api/register', formData);
      const {
        data: {message},
      } = response;

      if (message === 'success') {
        setSubmitSuccess(true);
        setFormData(data);
      }
    }
  };

  const {name, email, mobile, password, experience, expertise} = formData;

  return (
    <form onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-md-6'>
          <Input
            iconname='user'
            label='Full Name'
            placeholder='Enter Full Name...'
            type='text'
            name='name'
            handleChange={handleChange}
            required={true}
            errMessage={errorMessage.name}
            propvalue={name}
          />
        </div>
        <div className='col-md-6'>
          <Input
            iconname='envelope'
            label='Email'
            placeholder='Enter Email...'
            type='text'
            name='email'
            handleChange={handleChange}
            required={true}
            errMessage={errorMessage.email}
            propvalue={email}
          />
        </div>
        <div className='col-md-6'>
          <Input
            iconname='mobile'
            label='Mobile Number'
            placeholder='Enter Mobile...'
            type='text'
            name='mobile'
            handleChange={handleChange}
            required={true}
            errMessage={errorMessage.mobile}
            propvalue={mobile}
          />
        </div>
        <div className='col-md-6'>
          <Input
            iconname='lock'
            label='Password'
            placeholder='Enter Password...'
            type='password'
            name='password'
            handleChange={handleChange}
            required={true}
            errMessage={errorMessage.password}
            propvalue={password}
          />
        </div>
        <div className='col-md-6'>
          <Input
            iconname='graduation-cap'
            label='Year of Experience'
            placeholder='Enter Yoar of Experience...'
            type='text'
            name='experience'
            handleChange={handleChange}
            required={true}
            errMessage={errorMessage.experience}
            propvalue={experience}
          />
        </div>
        <div className='col-md-6'>
          <Input
            iconname='trophy'
            label='Area of Expertise'
            placeholder='Enter Area of Expertise...'
            type='text'
            name='expertise'
            handleChange={handleChange}
            required={true}
            errMessage={errorMessage.expertise}
            propvalue={expertise}
          />
        </div>
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
