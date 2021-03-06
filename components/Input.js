import React, {useState} from 'react';
import CountryCode from 'components/CountryCode';

function Input({
  label,
  iconname,
  name,
  type,
  placeholder = 'Enter...',
  required = false,
  register,
  errors,
  propvalue = '',
}) {
  const [value, setValue] = useState(propvalue);

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

        {name === 'email' || name === 'contact_email' ? (
          <input
            className='form-control'
            name={name}
            id={label}
            placeholder={placeholder}
            type={type}
            {...register(name, {
              required: `${label} is required`,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Enter a valid e-mail address',
              },
            })}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : name === 'mobile' ? (
          <>
            <CountryCode register={register} />
            <input
              className='form-control mobile_number'
              name={name}
              id={label}
              placeholder={placeholder}
              type={type}
              {...register(name, {
                required: `${label} is required`,
                pattern: {
                  value: /\d+/,
                  message: 'This input is number only.',
                },
                minLength: {
                  value: 10,
                  message: 'Enter valid mobile number (10 digit)',
                },
                maxLength: {
                  value: 10,
                  message: 'Enter valid mobile number (10 digit)',
                },
              })}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </>
        ) : required ? (
          <input
            className='form-control'
            name={name}
            id={label}
            placeholder={placeholder}
            type={type}
            {...register(name, {
              required: `${label} is required`,
            })}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <input
            className='form-control'
            name={name}
            id={label}
            placeholder={placeholder}
            type={type}
            {...register(name)}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </div>
      {errors[name] && (
        <div className='validation_msg'>{errors[name].message}</div>
      )}
    </div>
  );
}

export default Input;
