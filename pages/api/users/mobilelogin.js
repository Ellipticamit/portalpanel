import {apiHandler, usersDb} from 'helpers/api';

export default apiHandler({
  post: mobilelogin,
});

async function mobilelogin(req, res) {
  const {mobile} = req.body;
  const mobile_exist = await usersDb.isMobileExist(mobile);

  if (!mobile_exist) throw 'Mobile Number is incorrect.';

  return res.status(200).json({});
}
