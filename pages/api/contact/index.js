import {apiHandler, usersDb} from 'helpers/api';

import Filter from 'bad-words';

import {insertQuery} from 'services/query';

const filter = new Filter();

export default apiHandler({
  post: contact,
});

async function contact(req, res) {
  const contactData = req.body;

  console.log('contact data as asdf = ', contactData);
  const response = await clientDB.contact(contactData);
  const {data} = response;
  return res.status(200).json({message: 'success', respondeData: data});
}
