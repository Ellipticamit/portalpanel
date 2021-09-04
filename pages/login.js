import PageBanner from 'components/PageBanner';
import LoginForm from 'elements/LoginForm';

function login(props) {
  return (
    <section className='login'>
      <PageBanner img_name='bnr1.jpg' heading='Login' sub_heading='' />

      <div className='page__inner__content'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xl-6 col-lg-7 m-b30 wow fadeInLeft'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
            >
              <div className='page__inner__content__top'>
                <h6 className='sub_title bgl__primary m-b20 text_primary'>
                  Login
                </h6>
              </div>
              <div className='page__inner__content__form'>
                <LoginForm />
              </div>
            </div>

            <div className='col-xl-6 col-lg-5 m-b30 wow fadeInRight contact_img_container'>
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

export default login;
