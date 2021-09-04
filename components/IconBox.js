function IconBox({textcolor, title, paragraph, iconname}) {
  return (
    <div className='icon-box-wrapper box-anim-1  m-b30'>
      <div className={`icon-box-md radius ${textcolor}`}>
        <div className='icon-cell'>
          <i className={`flaticon-${iconname}`}></i>
        </div>
      </div>
      <div className='icon-content'>
        <h4 className=''>{title}</h4>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default IconBox;
