import About from 'elements/About'
import Banner from 'elements/Banner'
import OurProcess from 'elements/OurProcess'
import Service from 'elements/Service'
import Testmonial from 'elements/Testmonial'

function HomePage () {
  return (
    <>
      <Banner />
      <Service />
      <OurProcess />
      <Testmonial />
      <About />
    </>
  )
}

export default HomePage
