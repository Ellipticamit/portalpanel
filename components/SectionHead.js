function SectionHead({sub_title, title}) {
  return (
    <div className='section-head'>
      <h6 className='sub-title bgl-primary m-b20 text-primary'>{sub_title}</h6>
      <h2 className='title'>{title}</h2>
    </div>
  );
}

export default SectionHead;
