import {apiHandler, usersDb} from 'helpers/api';

export default apiHandler({
  post: profile,
  get: profiledetails,
  put: updateprofile,
});

async function profile(req, res) {
  // split out password from user details
  const profile = req.body;
  const user_exist = await usersDb.isUserExist(profile.uid);

  if (user_exist) return res.status(200).json({data: ''});

  const response = await usersDb.completeprofile(profile);
  return res.status(200).json({data: response});
}

async function profiledetails(req, res) {
  const {uid} = req.query;
  const response = await usersDb.getprofile(uid);
  const {data, message} = response;

  return res.status(200).json({data, message});
}

async function updateprofile(req, res) {
  const profile = req.body;
  const response = await usersDb.updateProfile(profile);
  const {message, data} = response;

  return res.status(200).json({data, message});
}
