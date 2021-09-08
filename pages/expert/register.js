import React from 'react'
import PageBanner from 'components/PageBanner'
import RegisterForm from 'components/RegisterForm'
import { ExpertFormData, ExpertRegisterFields } from 'utility/constant'

function ExpertRegister (props) {
  return (
    <section className='register'>
      <PageBanner
        img_name='bnr1.jpg'
        heading='Register As Expert'
        sub_heading=''
      />
      <div className='page__inner__content'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-xl-12 col-lg-7 m-b30 wow fadeInLeft'
              data-wow-duration='2s'
              data-wow-delay='0.2s'
            >
              <div className='page__inner__content__top'>
                {/*
                <h6 className='sub_title bgl-primary m-b20 text-primary'>
                  Register as Expert
                </h6>
                */}
                <h2 className='title'>
                  We Love To Help Great Companies To Enlarge Their Revenues.
                </h2>
              </div>

              <div className='page__inner__content__form'>
                <RegisterForm
                  data={ExpertFormData}
                  fields={ExpertRegisterFields}
                />
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
  )
}

export default ExpertRegister
