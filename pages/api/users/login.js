const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
import getConfig from 'next/config';

import {apiHandler, usersDb} from 'helpers/api';

const {serverRuntimeConfig} = getConfig();

export default apiHandler({
  post: login,
});

async function login(req, res) {
  const {email, password} = req.body;
  const mail_exist = await usersDb.isEmailExist(email);

  if (!mail_exist) throw 'Email is incorrect.';

  const user = JSON.parse(JSON.stringify(await usersDb.login(email)));

  if (!bcrypt.compareSync(password, user.password))
    throw 'Password is incorrect.';

  const token = jwt.sign({sub: user.uid}, serverRuntimeConfig.secret, {
    expiresIn: '7d',
  });

  return res.status(200).json({
    id: user.id,
    first_name: user.first_name,
    middle_name: user.middle_name,
    surname: user.surname,
    email: user.email,
    token,
  });
}
