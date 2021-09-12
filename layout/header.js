import Link from 'next/link';
import {useState, useEffect} from 'react';
import Image from 'next/image';

import {userService} from 'services/user.services';

function Header({homeheader}) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

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
              {user ? (
                <ul className='auth__menu'>
                  <li>
                    Hi, Amit
                    <ul className='sub-menu'>
                      <li>
                        <a href='/expert/dashboard'>Profile Details</a>
                      </li>
                      <li>
                        <a onClick={logout}>Logout</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              ) : (
                <ul className='auth__menu'>
                  <li>
                    <a href='/login'>
                      <div className='btn btn__corner gradient btn__primary'>
                        Login
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href='/expert/register'>
                      <div className='btn btn__corner gradient btn__primary'>
                        register
                      </div>
                    </a>
                  </li>
                </ul>
              )}
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
