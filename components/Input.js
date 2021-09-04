function Input({
  label,
  iconname,
  name,
  type,
  placeholder = 'Enter...',
  handleChange,
  propvalue,
  errMessage = false,
  required = false,
}) {
  const onValueChange = (e) => {
    const {name, value} = e.target;
    handleChange(name, value);
  };

  return (
    <div className='form__group'>
      <label htmlFor={label}>
        {label} {required && <span className='required'>*</span>}
      </label>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>
            <i className={`la la-${iconname}`}></i>
          </span>
        </div>
        <input
          className='form-control'
          name={name}
          id={label}
          placeholder={placeholder}
          type={type}
          value={propvalue}
          onChange={onValueChange}
        />
      </div>
      {errMessage && (
        <div className='validation_msg'>This field is requried</div>
      )}
    </div>
  );
}

export default Input;
