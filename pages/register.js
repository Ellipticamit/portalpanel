import RegisterForm from 'elements/RegisterForm';
import PageBanner from 'components/PageBanner';

import StepProgressBar from 'react-step-progress';

function register(props) {
  const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  function step2Validator() {
    return false;
  }

  return (
    <section className='register'>
      <PageBanner
        img_name='bnr1.jpg'
        heading='Page Heading'
        sub_heading='Page SUb Heading'
      />

      <div className='page__inner__content'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xl-12 col-lg-7 m-b30 wow fadeInLeft'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
            >
              <StepProgressBar
                startingStep={0}
                steps={[
                  {
                    label: 'Briefing',
                    name: 'Briefing',
                    content: step1Content,
                  },
                  {
                    label: 'Image-Acquisition',
                    name: 'Image-Acquisition',
                    content: step2Content,
                  },
                  {
                    label: 'Image-processing',
                    name: 'Image Processing',
                    content: step3Content,
                    validator: step2Validator,
                  },
                  {
                    label: 'Finish',
                    name: 'Finish',
                    content: step3Content,
                  },
                ]}
              />
              <div className='page__inner__content__top'>
                <h6 className='sub_title bgl-primary m-b20 text-primary'>
                  Register
                </h6>
                <h2 className='title'>
                  We Love To Help Great Companies To Enlarge Their Revenues.
                </h2>
              </div>
              <div className='page__inner__content__form'>
                <RegisterForm />
              </div>
            </div>
            {/*
               <div className='col-xl-6 col-lg-5 m-b30 wow fadeInRight'>
              <div className=''>
                <img src='images/about/img2.png' className='move_1' alt='' />
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default register;
