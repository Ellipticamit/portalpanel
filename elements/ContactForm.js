import {useState, useEffect} from 'react';
import axios from 'axios';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import {getErrorMessage, checkMessage} from 'utility/ValidationMessage';

const data = {
  first_name: '',
  last_name: '',
  company: '',
  business_number: '',
  business_email: '',
  location: '',
  message: '',
};

function ContactForm(props) {
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
      const response = await axios.post('/api/contact', formData);
      const {
        data: {message},
      } = response;

      if (message === 'success') {
        setSubmitSuccess(true);
        setFormData(data);
      }
    }
  };

  const {
    first_name,
    last_name,
    company,
    business_number,
    business_email,
    location,
    message,
  } = formData;

  return (
    <form onSubmit={handleSubmit}>
      {submitSuccess ? (
        <div className='success_message'>
          Thanks for contacting. <br /> We will get back to you as soon as
          possible
        </div>
      ) : (
        <div className='row'>
          <div className='col-sm-6'>
            <Input
              iconname='user'
              label='First Name'
              type='text'
              name='first_name'
              handleChange={handleChange}
              propvalue={first_name}
              required={true}
              errMessage={errorMessage.first_name}
            />
          </div>
          <div className='col-sm-6'>
            <Input
              iconname='user'
              label='Last Name'
              type='text'
              name='last_name'
              handleChange={handleChange}
              propvalue={last_name}
              required={true}
              errMessage={errorMessage.last_name}
            />
          </div>
          <div className='col-sm-6'>
            <Input
              iconname='city'
              label='Company Name'
              type='text'
              name='company'
              handleChange={handleChange}
              propvalue={company}
              required={true}
              errMessage={errorMessage.company}
            />
          </div>
          <div className='col-sm-6'>
            <Input
              iconname='mobile'
              label='Business Number'
              type='text'
              name='business_number'
              handleChange={handleChange}
              propvalue={business_number}
              required={true}
              errMessage={errorMessage.business_number}
            />
          </div>
          <div className='col-sm-6'>
            <Input
              iconname='envelope'
              label='Business Email'
              type='text'
              name='business_email'
              handleChange={handleChange}
              propvalue={business_email}
              errMessage={errorMessage.business_email}
              required={true}
            />
          </div>
          <div className='col-sm-6'>
            <Input
              iconname='map-marker'
              label='Location'
              type='text'
              name='location'
              handleChange={handleChange}
              propvalue={location}
            />
          </div>

          <div className='col-sm-12'>
            <TextArea
              iconname='sms'
              label='Message'
              name='message'
              handleChange={handleChange}
              propvalue={message}
            />
          </div>

          <div className='col-sm-12 mt-2'>
            <button
              name='submit'
              type='submit'
              propvalue='Submit'
              className='btn2 btn2-link d-inline-flex align-items-center'
            >
              <i className='fa fa-angle-right m-r10'></i>Contact Us
            </button>
          </div>
          <div className='m-t20 danger__text'>
            <span className='required'>*</span> Fields are mandatory.
          </div>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
