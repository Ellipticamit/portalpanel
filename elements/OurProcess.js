import React from 'react';
import SectionHead from 'components/SectionHead';
import IconBox from 'components/IconBox';

function OurProcess(props) {
  return (
    <section className='content__inner'>
      <div className='container'>
        <div className='row align-items-center'>
          <div
            className='col-xl-6 col-lg-7 wow fadeInLeft'
            data-wow-duration='2s'
            data-wow-delay='0.2s'
          >
            <SectionHead
              sub_title='Our Process'
              title='Our Working Process To Help Your Boost Your Business'
            />
            <div className='section-wraper-one'>
              <IconBox
                textcolor='text-red'
                title='Gather Requirement'
                paragraph=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.'
                iconname='idea'
              />
              <IconBox
                textcolor='text-yellow'
                title='Found Perfect Match'
                paragraph=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.'
                iconname='line-graph'
              />
              <IconBox
                textcolor='text-green'
                title='Connect Each Other'
                paragraph=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.'
                iconname='rocket'
              />
            </div>
          </div>
          <div
            className='col-xl-6 col-lg-5 wow fadeInRight'
            data-wow-duration='2s'
            data-wow-delay='0.4s'
          >
            <div className='dlab-media'>
              <img src='images/about/img5.png' className='move_2' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
