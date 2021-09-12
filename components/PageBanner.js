function PageBanner({img_name, heading, sub_heading}) {
  return (
    <div
      className='page__banner overlay_primary_dark'
      style={{backgroundImage: `url(/images/banner/${img_name})`}}
    >
      <div className='container'>
        <div className='page__banner__content'>
          <h2>{heading}</h2>
          <h5>{sub_heading}</h5>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
