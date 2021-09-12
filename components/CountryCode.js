import React from 'react';

function CountryCode({register}) {
  return (
    <select
      name='country_code'
      {...register('country_code')}
      className='country_codes '
    >
      <option data-countrycode='IN' value='91' defaultValue>
        +91
      </option>
      <option data-countrycode='US' value='1'>
        +1
      </option>
      <optgroup label='Other countries'>
        <option data-countrycode='DZ' value='213'>
          +213
        </option>
        <option data-countrycode='AD' value='376'>
          +376
        </option>
        <option data-countrycode='AO' value='244'>
          +244
        </option>
        <option data-countrycode='AI' value='1264'>
          +1264
        </option>
        <option data-countrycode='AG' value='1268'>
          +1268
        </option>

        <option data-countrycode='YE' value='969'>
          +969
        </option>
        <option data-countrycode='YE' value='967'>
          +967
        </option>
        <option data-countrycode='ZM' value='260'>
          +260
        </option>
      </optgroup>
    </select>
  );
}

export default CountryCode;
