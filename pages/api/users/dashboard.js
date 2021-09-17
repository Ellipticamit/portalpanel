import {apiHandler, usersDb} from 'helpers/api';

export default apiHandler({
  post: dashboard,
});

async function dashboard(req, res) {
  // split out password from user details
  return res.status(200).json({data: ''});
}
