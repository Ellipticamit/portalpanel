function Footer(props) {
  return (
    <footer
      className='footer'
      id='footer'
      style={{backgroundImage: 'url(images/background/bg10.png)'}}
    >
      <div className='footer__top'>
        <div className='container'>
          <div
            className='footer__info wow fadeIn'
            data-wow-duration='2s'
            data-wow-delay='0.8s'
          >
            <div className='row align-items-center'>
              <div className='col-xl-6 col-md-4'>
                <div className='footer-logo'>
                  <a href='/'>
                    <img src='images/logo-white.png' alt='' />
                  </a>
                </div>
              </div>
              <div className='col-xl-3 col-md-4 col-sm-6'>
                <div className='icon-bx-wraper left m-b10'>
                  <div className='icon-lg'>
                    <a href='' className='icon-cell'>
                      <i className='flaticon-email'></i>
                    </a>
                  </div>
                  <div className='icon-content'>
                    <p>
                      +91 987-654-3210
                      <br />
                      info@example.com
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-xl-3 col-md-4 col-sm-6'>
                <div className='icon-bx-wraper left m-b10'>
                  <div className='icon-lg'>
                    <a href='' className='icon-cell'>
                      <i className='flaticon-location'></i>
                    </a>
                  </div>
                  <div className='icon-content'>
                    <p>Marmora Road Chi Minh City, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container'>
          Copyright © 2021 Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
