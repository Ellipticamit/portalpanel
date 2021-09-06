import 'assets/css/bootstrap.min.css';
import 'assets/css/global.css';
import {useState, useEffect} from 'react';
import Head from 'next/head';
import Layout from 'layout';
import useScrollPosition from 'use-scroll-position';
import {useRouter} from 'next/router';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function MyApp({Component, pageProps}) {
  const [header_, setHeader_] = useState();

  let scrollPosition = useScrollPosition();

  useEffect(() => {
    setHeader_(document.getElementsByClassName('main_bar'));
  }, []);

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
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}
export default MyApp;
