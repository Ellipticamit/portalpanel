function TextArea({
  label,
  iconname,
  name,
  placeholder = 'Enter...',
  register,
  showicon = true,
}) {
  const paddingclass = showicon ? '' : 'p-10';
  return (
    <div className='form__group'>
      <label htmlFor={label}>{label}</label>

      <div className='input-group'>
        {showicon && (
          <div className='input-group-prepend'>
            <span className='input-group-text'>
              <i className={`la la-${iconname}`}></i>
            </span>
          </div>
        )}
        <textarea
          className={`form-control ${paddingclass}`}
          name={name}
          id={label}
          placeholder={placeholder}
          {...register(name)}
        ></textarea>
      </div>
    </div>
  );
}

export default TextArea;
