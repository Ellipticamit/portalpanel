export const arrayToString = (data) => {
  let result = '';
  if (Array.isArray(data)) {
    const last = data.length - 1;
    data.map((item, index) => {
      result += item;
      if (index !== last) result += ', ';
      return result;
    });

    return result;
  }

  return data;
};

export const getFileExtension = (filename) => {
  var ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? '' : ext[1];
};

export const getMultiDefaultValue = (data, options) => {
  let default_array = [];
  let i = 0;
  const data_array = data.split(',');
  data_array.map((item) => {
    default_array[i++] = options.filter(({value}) => value === item.trim())[0];
  });
  return default_array;
};

export const getMultiValue = (data, options) => {
  let default_values = [];
  let i = 0;
  const data_array = data.split(',');
  data_array.map((item) => {
    default_values[i++] = options.filter(
      ({value}) => value === item.trim()
    )[0].value;
  });
  return default_values;
};

export const getDefaultValue = (data, options) => {
  const default_array = options.filter(({value}) => value === data.trim());
  return default_array[0];
};
