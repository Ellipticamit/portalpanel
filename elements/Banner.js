import Link from 'next/link';

function Banner(props) {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner__inner'>
          <div className='banner__bg_img1'>
            <img src='images/main-slider/slider1/pic3.png' alt='' />
          </div>
          <div className='banner__bg_img2'>
            <img src='images/main-slider/slider1/pic4.png' alt='' />
          </div>

          <div className='banner__content'>
            <div className='banner__content__texts'>
              <h6
                data-wow-duration='1s'
                data-wow-delay='0.5s'
                className='wow fadeInUp sub-title text_primary'
              >
                WE PROVIDE TALENT
              </h6>
              <h1
                data-wow-duration='1.2s'
                data-wow-delay='1s'
                className='wow fadeInUp '
              >
                Hire the Top <br />
                <span className='text_primary'>Experienced </span>
                Talent
              </h1>
              <p
                data-wow-duration='1.4s'
                data-wow-delay='1.5s'
                className='wow fadeInUp m-b30'
              >
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque vitae ante at elit fringilla ac at purus.
              </p>

              <div className='banner__btns'>
                <div
                  data-wow-duration='1.6s'
                  data-wow-delay='2s'
                  className='wow fadeInUp btn btn__primary '
                >
                  <Link href='/contact'>
                    <a>
                      <div className='btn2 btn2-link d-inline-flex align-items-center'>
                        <i className='fa fa-angle-right m-r10'></i>BECOME A
                        CLIENT
                      </div>
                    </a>
                  </Link>
                </div>

                <div
                  data-wow-duration='1.6s'
                  data-wow-delay='2s'
                  className='wow fadeInUp btn btn__primary'
                >
                  <Link href='/register'>
                    <a>
                      <div className='btn2 btn2-link d-inline-flex align-items-center'>
                        <i className='fa fa-angle-right m-r10'></i> BECOME AN
                        EXPERT
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='banner__content__img'>
              <div
                className='dz-media move_box wow fadeIn'
                data-wow-duration='1.6s'
                data-wow-delay='0.8s'
              >
                <img className='move_1' src='images/move/pic1.png' alt='' />
                <img className='move_2' src='images/move/pic2.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
