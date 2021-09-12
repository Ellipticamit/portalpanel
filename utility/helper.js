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
