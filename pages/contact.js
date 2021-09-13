import PageBanner from 'components/PageBanner';
import ContactForm from 'elements/ContactForm';

function Contact(props) {
  return (
    <section className='contact'>
      <PageBanner
        img_name='bnr1.jpg'
        heading='Contact Us'
        sub_heading='Page SUb Heading'
      />
      <div className='page__inner__content'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xl-6 col-lg-7 m-b30 wow fadeInLeft'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
            >
              <div className='page__inner__content__top'>
                <h2 className='title'>Heading text related to contact</h2>
              </div>
              <div className='page__inner__content__form'>
                <ContactForm />
              </div>
            </div>

            <div className='col-xl-6 col-lg-5 m-b30 wow fadeInRight contact_img_container'>
              <hr className='hr-text' data-content='OR' />
              <div className='contact-text-box '>
                <h6> Write us @ :- </h6>
                <h5> seniorportal@gmail.com</h5>
              </div>
              <div className='contact-text-box '>
                <h6> Give a missed call:- </h6>
                <h5> +91-1234123412</h5>
              </div>
              <div className='contact-text-box '>
                <h6> Whatsapp @ :- </h6>
                <h5> +91-1231231231</h5>
              </div>

              <div className=''>
                <img src='images/about/img2.png' className='move_1' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
