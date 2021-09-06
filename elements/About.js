import Link from 'next/link';

function About(props) {
  return (
    <section className='content__inner'>
      <div className='container'>
        <div className='row align-items-center'>
          <div
            className='col-lg-6 m-b30 wow fadeInLeft'
            data-wow-duration='2s'
            data-wow-delay='0.2s'
          >
            <div className='dz-media'>
              <img src='images/about/img4.png' className='move_1' alt='' />
            </div>
          </div>
          <div
            className='col-lg-6 m-b30 wow fadeInRight'
            data-wow-duration='2s'
            data-wow-delay='0.4s'
          >
            <div className='section-head style-1 mb-4'>
              <h6 className='sub-title bgl-primary m-b20 text-primary'>
                About Us
              </h6>
              <h2 className='title'>
                How We Can Help You Achieve Your Business Goal
              </h2>
            </div>
            <p>
              Integer pretium molestie nisl, non blandit lectus suscipit in.
              Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt
              consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat,
              tortor velit suscipit orci, sed consectetur ante eros id urna.
              Mauris luctus nulla ut pharetra tempor.
            </p>
            <p className='m-b30'>
              Mauris egestas eleifend sapien eu malesuada. Phasellus at metus
              eget sapien tristique accumsan non sit amet augue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
