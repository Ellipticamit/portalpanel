import {useState} from 'react';
import IconBox2 from 'components/IconBox2';

function Service(props) {
  const [open, setOpen] = useState('p2');
  return (
    <section
      className='content-inner wow fadeInUp'
      style={{backgroundImage: 'url(images/background/bg1.png)'}}
    >
      <div className='container'>
        <div className='section-head text-center'>
          <h6 className='sub-title bgl-primary m-b20 text-primary'>Services</h6>
          <h2 className='title'>Provide Awesome Service To You</h2>
        </div>
        <div className='row'>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-duration='2s'
            data-wow-delay='0.2s'
          >
            <IconBox2
              title='Strategy & Research'
              value='p1'
              open={open}
              setOpen={setOpen}
              desc='   Fusce sit amet dui vitae urna tristique imperdiet. Donec eget
                  sapien euismod, faucibus nibh non, consequat elit. Praesent
                  sed vehicula.'
              iconname='office'
              color='yellow'
            />
          </div>

          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-duration='2s'
            data-wow-delay='0.4s'
          >
            <IconBox2
              title='Perfect Match'
              value='p2'
              open={open}
              setOpen={setOpen}
              desc='   Fusce sit amet dui vitae urna tristique imperdiet. Donec eget
                  sapien euismod, faucibus nibh non, consequat elit. Praesent
                  sed vehicula.'
              iconname='website'
              color='red'
            />
          </div>
          <div
            className='col-lg-4 col-md-6 wow fadeInUp'
            data-wow-duration='2s'
            data-wow-delay='0.6s'
          >
            <IconBox2
              title='Experts'
              value='p3'
              open={open}
              setOpen={setOpen}
              desc='   Fusce sit amet dui vitae urna tristique imperdiet. Donec eget
                  sapien euismod, faucibus nibh non, consequat elit. Praesent
                  sed vehicula.'
              iconname='pie-charts'
              color='green'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
