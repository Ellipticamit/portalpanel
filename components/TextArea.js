function TextArea({
  label,
  iconname,
  name,
  placeholder = 'Enter...',
  handleChange,
  propvalue,
}) {
  const onValueChange = (e) => {
    const {name, value} = e.target;
    handleChange(name, value);
  };
  return (
    <div className='form__group'>
      <label htmlFor={label}>{label}</label>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>
            <i className={`la la-${iconname}`}></i>
          </span>
        </div>
        <textarea
          name={name}
          className='form-control'
          placeholder={placeholder}
          onChange={onValueChange}
          value={propvalue}
        ></textarea>
      </div>
    </div>
  );
}

export default TextArea;
