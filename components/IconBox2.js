function IconBox2({open, setOpen, value, title, desc, iconname, color}) {
  return (
    <div
      className={`${
        open === value
          ? 'icon-box-wrapper box-anim-2 box-hover text-center m-b30 active'
          : 'icon-box-wrapper box-anim-2 box-hover text-center m-b30'
      }`}
      onMouseOver={() => setOpen(value)}
    >
      <div className={`icon-box-md radius bg-${color} shadow-${color}`}>
        <div className='icon-cell'>
          <i className={`flaticon-${iconname}`}></i>
        </div>
      </div>
      <div className='icon-content'>
        <h4 className='title'>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default IconBox2;
