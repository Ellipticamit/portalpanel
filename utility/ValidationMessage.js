const Message = {
  email: 'Email Address is required'
}

const getErrorMessage = data => {
  let errMessage = {}
  for (const [key, value] of Object.entries(data)) {
    errMessage[key] = value === '' ? true : false
  }

  return errMessage
}

const checkMessage = data => {
  for (const [key, value] of Object.entries(data)) {
    if (value) return true
  }
  return false
}

const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

function validateEmail (email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export { getErrorMessage, isEmpty, checkMessage, validateEmail }
