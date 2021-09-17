const bcrypt = require('bcryptjs');

import {apiHandler, usersDb} from 'helpers/api';

export default apiHandler({
  post: register,
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
