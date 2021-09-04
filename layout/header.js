import Link from 'next/link';
import {useState} from 'react';
import Image from 'next/image';

function Header({homeheader}) {
  const [show, setShow] = useState(false);
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
                  <Link href='/'>
                    <a>Home</a>
                  </Link>
                </li>
                <li className='menu__link'>
                  <Link href='/'>
                    <a>About Us</a>
                  </Link>
                </li>
                <li className='menu__link'>
                  <Link href='/contact'>
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
              <div className='auth__btn'>
                <Link href='/login'>
                  <a>
                    <div className='btn btn__corner gradient btn__primary'>
                      Login
                    </div>
                  </a>
                </Link>
                <Link href='/register'>
                  <a>
                    <div className='btn btn__corner gradient btn__primary'>
                      Register
                    </div>
                  </a>
                </Link>
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
  );
}

export default Header;
