const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import getConfig from 'next/config';

import {apiHandler, usersDb} from 'helpers/api';
const {serverRuntimeConfig} = getConfig();

export default apiHandler({
  post: register,
  put: updateUser,
});

async function register(req, res) {
  // split out password from user details
  const {password, ...user} = req.body;

  const mail_exist = await usersDb.isEmailExist(user.email);

  if (mail_exist) {
    throw `User with the email "${user.email}" already exists.`;
  }

  const mobile_exist = await usersDb.isMobileExist(user.mobile);
  if (mobile_exist) {
    throw `User with the mobile no  "${user.mobile}" already exists.`;
  }

  user.password = bcrypt.hashSync(password, 10);

  const response = await usersDb.register(user);
  return res.status(200).json({data: response});
}

async function updateUser(req, res) {
  //const uid = await usersDb.isUserExist(user.uid);
  const user = req.body;
  let response = await usersDb.updateUser(user);

  const {data, message} = response;
  const token = jwt.sign({sub: user.uid}, serverRuntimeConfig.secret, {
    expiresIn: '7d',
  });

  response.data = {
    id: data.id,
    first_name: data.first_name,
    middle_name: data.middle_name,
    surname: data.surname,
    email: data.email,
    mobile: data.mobile,
    token,
  };

  return res.status(200).json({data: response.data, message});
}
