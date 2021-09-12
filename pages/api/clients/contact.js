import {apiHandler, clientsDb} from 'helpers/api';

export default apiHandler({
  post: contact,
});

async function contact(req, res) {
  // split out password from user details
  console.log('body - ', req.body);
  await clientsDb.contact(req.body);
  return res.status(200).json({});
}
