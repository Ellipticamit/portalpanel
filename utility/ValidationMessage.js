const Message = {
  email: 'Email Address is required',
};

const getErrorMessage = (data) => {
  let errMessage = {};
  for (const [key, value] of Object.entries(data)) {
    errMessage[key] = value === '' ? true : false;
  }

  return errMessage;
};

const checkMessage = (data) => {
  for (const [key, value] of Object.entries(data)) {
    if (value) return true;
  }
  return false;
};

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export {getErrorMessage, isEmpty, checkMessage};
