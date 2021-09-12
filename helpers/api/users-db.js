import Filter from 'bad-words';
import {getConditionQuery, insertQuery} from 'services/query';
import {arrayToString} from 'utility/helper';

const filter = new Filter();

export const usersDb = {
  login,
  register,
  isEmailExist,
  isUserExist,
  completeprofile,
};

async function login(email) {
  const myquery = `email = ? `;
  const value = [filter.clean(email)];

  const response = await getConditionQuery('user', myquery, value);
  const {data} = response;
  return data[0];
}

async function register(user) {
  const {
    first_name,
    middle_name,
    surname,
    country_code,
    mobile,
    email,
    password,
  } = user;

  const myquery = `register (first_name, middle_name, surname, country_code, mobile, email, password)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const value = [
    filter.clean(first_name),
    middle_name ? filter.clean(middle_name) : middle_name,
    surname ? filter.clean(surname) : surname,
    filter.clean(country_code),
    filter.clean(mobile),
    filter.clean(email),
    filter.clean(password),
  ];

  try {
    const response = await insertQuery(myquery, value);
    const rows = response && response.affectedRows;

    if (rows === 1) {
      const user = await getUserDetails(email);

      return {
        message: 'success',
        userData: user,
      };
    }
  } catch (error) {
    // console.log('db error = ', error);
    return {
      message: 'error',
      userData: null,
    };
  }
}

async function completeprofile(profile) {
  const {
    experience,
    industries,
    position,
    assignment,
    work,
    professionalprofile,
    uid,
    resume,
  } = profile;

  const industries_str = arrayToString(industries);
  const assignment_str = arrayToString(assignment);
  const work_str = arrayToString(work);

  const myquery = `userprofile (uid, experience, industries, position, assignment, work, professionalprofile, resume)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const value = [
    filter.clean(uid),
    experience ? filter.clean(experience) : experience,
    filter.clean(industries_str),
    position ? filter.clean(position) : position,
    filter.clean(assignment_str),
    filter.clean(work_str),
    professionalprofile,
    resume,
  ];

  try {
    const response = await insertQuery(myquery, value);
    const rows = response && response.affectedRows;

    if (rows === 1) {
      return {
        message: 'success',
      };
    }
  } catch (error) {
    return {
      message: 'error',
    };
  }
}

async function getUserDetails(email) {
  const myquery = `email = ? `;
  const value = [filter.clean(email)];

  const response = await getConditionQuery('register', myquery, value);
  const {data} = response;

  return data[0];
}

// helper funciton

async function isEmailExist(email) {
  const myquery = `email = ? `;
  const value = [filter.clean(email)];

  const response = await getConditionQuery('register', myquery, value);
  const {data} = response;
  if (data.length === 0) return false;
  return true;
}

async function isUserExist(uid) {
  const myquery = `uid = ? `;
  const value = [filter.clean(uid)];

  const response = await getConditionQuery('userprofile', myquery, value);
  const {data} = response;
  if (data.length === 0) return false;
  return true;
}
