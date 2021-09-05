import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

function Header ({ homeheader }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <header className={`header__site header__transparent ${homeheader}`}>
        <div className='main_bar'>
          <div className='container space__between'>
            <div className='logo_container'>
              <div className='logo'>
                <Link href='/'>
                  <a>Logo</a>
                </Link>
              </div>
            </div>
            <div className={`menu__container ${show ? 'show' : ''}`}>
              <div className='menu__logo'>Menu Logo</div>
              <ul className='menu'>
                <li className='menu__link'>
                  <a href='/'>Home</a>
                </li>
                <li className='menu__link'>
                  <a href='/'>About Us</a>
                </li>
                <li className='menu__link'>
                  <a href='/contact'>Contact Us</a>
                </li>
              </ul>
              <div className='auth__btn'>
                <a href='/login'>
                  <div className='btn btn__corner gradient btn__primary'>
                    Login
                  </div>
                </a>
                <a href='/register'>
                  <div className='btn btn__corner gradient btn__primary'>
                    Register
                  </div>
                </a>
              </div>
            </div>

            <div
              className={`ham__burger ${show ? 'open' : ''}`}
              onClick={() => setShow(!show)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
