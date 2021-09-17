import {useState} from 'react';
import {useForm} from 'react-hook-form';
import Spinner from 'react-bootstrap/Spinner';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import {clientService} from 'services/client.services';
import {ClientRegisterFields} from 'utility/constant';

function ContactForm(props) {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});

  const onSubmit = async (formData) => {
    setLoading(true);

    clientService
      .contact(formData)
      .then((response) => {
        setSubmitSuccess(true);
        setLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        setLoading(false);
        window.scrollTo(0, 0);
        console.log(error);
      });
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
          <div className='col-md-12'>
            <Input
              iconname={'stream'}
              label='Keywords related to ask'
              type='text'
              name='keywords'
              required={false}
              register={register}
              errors={errors}
              placeholder='(Type of work, Industry, Experience required etc.)'
            />
          </div>
          <div className='col-md-12'>
            <TextArea
              iconname='sms'
              label='Brief about project'
              name='project_desc'
              register={register}
              placeholder='Enter brief about project...'
            />
          </div>

          {ClientRegisterFields.map((item) => (
            <div className='col-md-12' key={item.label}>
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
                <i className='fa fa-angle-right m-r10'></i>Contact Us
              </button>
            )}
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
