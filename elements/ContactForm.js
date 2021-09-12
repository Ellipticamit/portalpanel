import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

import {clientService} from 'services/client-services';
import {ClientRegisterFields} from 'utility/constant';

function ContactForm(props) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const onSubmit = async (formData) => {
    alert(JSON.stringify(formData));

    clientService
      .contact(formData)
      .then(() => {
        setSubmitSuccess(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {submitSuccess ? (
        <div className='success_message'>
          Thanks for contacting us. <br /> We will get back to you as soon as
          possible
        </div>
      ) : (
        <div className='row'>
          {ClientRegisterFields.map((item) => (
            <div className='col-md-6'>
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
          ))}

          <div className='col-md-12'>
            <TextArea
              iconname='sms'
              label='Message'
              name='message'
              register={register}
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
