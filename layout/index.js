import Header from './header';
import Footer from './footer';

function layout(props) {
  return (
    <>
      <Header homeheader={props.homeheader} />
      <div className='page__content bg__white' id='top'>
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default layout;
