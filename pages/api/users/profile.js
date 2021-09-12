const bcrypt = require('bcryptjs');

import {apiHandler, usersDb} from 'helpers/api';

export default apiHandler({
  post: profile,
});

async function profile(req, res) {
  // split out password from user details
  const profile = req.body;

  const user_exist = await usersDb.isUserExist(profile.uid);

  if (user_exist) {
    return res.status(200).json({});
  }

  const response = await usersDb.completeprofile(profile);
  return res.status(200).json({data: response});
}
