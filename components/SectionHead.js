function SectionHead({sub_title, title}) {
  return (
    <div className='section-head'>
      <h6 className='sub-title bgl__primary m-b20 text_primary'>{sub_title}</h6>
      <h2 className='title'>{title}</h2>
    </div>
  );
}

export default SectionHead;
