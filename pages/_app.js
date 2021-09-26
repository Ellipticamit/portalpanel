import 'assets/css/bootstrap.min.css';
import 'react-tabs/style/react-tabs.css';
import 'assets/css/global.css';
import {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout from 'layout';
import useScrollPosition from 'use-scroll-position';
import {useRouter} from 'next/router';

import {userService} from 'services/user.services';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function MyApp({Component, pageProps}) {
  const [header_, setHeader_] = useState();
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  let scrollPosition = useScrollPosition();

  useEffect(() => {
    setHeader_(document.getElementsByClassName('main_bar'));

    authCheck(router.asPath);
    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    setUser(userService.userValue);
    const publicPaths = ['/', '/login', '/contact'];
    const path = url.split('?')[0];

    if (path.includes('expert/register')) {
      setAuthorized(true);
    } else if (!userService.userValue && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/login',
        query: {returnUrl: router.asPath},
      });
    } else {
      setAuthorized(true);
    }
  }

  scrollPosition > 10
    ? header_ && header_[0].classList.add('is-fixed')
    : header_ && header_[0].classList.remove('is-fixed');

  const router = useRouter();

  const home_header = router.pathname === '/' ? 'home__header' : '';

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='page__wrapper'>
        <Layout homeheader={home_header}>
          {authorized && <Component {...pageProps} />}
        </Layout>
      </div>
    </>
  );
}
export default MyApp;
