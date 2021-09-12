import PageBanner from 'components/PageBanner';

function dashboard(props) {
  return (
    <section className='dashboard'>
      <PageBanner img_name='bnr1.jpg' heading='Dashboard' sub_heading='' />
      <div className='page__inner__content'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 m-b30'>
              <aside className='side-bar sticky-top'>
                <div className='widget widget_archive'>
                  <h2 className='widget-title'>Profile Details</h2>
                  <ul>
                    <li>
                      <a href='#'>Upload Resume</a>
                    </li>
                    <li>
                      <a href='#'>Edit Profile</a>
                    </li>
                    <li>
                      <a href='#'>Add Education</a>
                    </li>
                    <li>
                      <a href='#'>Add Company</a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className='col-xl-8 col-lg-8 m-b50'>
              {' '}
              <div className='dlab-blog style-1 bg-white text-center m-b50'>
                <div className='dlab-media dlab-img-effect zoom'>
                  <img src='images/blog/default/thum1.jpg' alt='' />
                </div>
                <div className='dlab-info'>
                  <h4 className='dlab-title'>
                    <a href='/blog-details-1'>
                      Fusce sem ligula, imperdiet sed nisi sit amet, euismod
                      posuere dolor. Vestibulum in ante ut tortor eleifend
                      venenatis.
                    </a>
                  </h4>
                  <p className='m-b0'>
                    Sed auctor magna lacus, in placerat nisl sollicitudin ut.
                    Morbi feugiat ante velit, eget convallis arcu iaculis vel.
                    Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed
                    auctor vitae, porttitor quis erat. Donec sit amet semper
                    massa.
                  </p>
                  <div className='dlab-meta meta-bottom'>
                    <ul>
                      <li className='post-date'>
                        <i className='flaticon-clock m-r10'></i>7 March, 2020
                      </li>
                      <li className='post-author'>
                        <i className='flaticon-user m-r10'></i>By Johne Doe
                      </li>
                      <li className='post-comment'>
                        <a href='javascript:void(0);'>
                          <i className='flaticon-speech-bubble'></i>
                          <span>15</span>
                        </a>
                      </li>
                      <li className='post-share'>
                        <i className='flaticon-share'></i>
                        <ul>
                          <li>
                            <a
                              className='fa fa-facebook'
                              href='https://en-gb.facebook.com/'
                            ></a>
                          </li>
                          <li>
                            <a
                              className='fa fa-twitter'
                              href='https://twitter.com/login?lang=en'
                            ></a>
                          </li>
                          <li>
                            <a
                              className='fa fa-linkedin'
                              href='https://www.linkedin.com/login'
                            ></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default dashboard;
