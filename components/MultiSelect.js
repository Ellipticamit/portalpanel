import Select from 'react-select';

const options = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'},
];

function MultiSelect({label, ref, options, value, onChange, name, errors}) {
  console.log(errors[name]);
  return (
    <div className='form__group'>
      <label>{label}</label>

      <Select
        inputRef={ref}
        value={options.filter((c) => value.includes(c.value))}
        onChange={(val) => onChange(val.map((c) => c.value))}
        options={options}
        isMulti
      />
      {errors[name] && (
        <div className='validation_msg'>{errors[name].message}</div>
      )}
    </div>
  );
}

export default MultiSelect;
