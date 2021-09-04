import Filter from 'bad-words';
import {insertQuery} from 'services/query';

const filter = new Filter();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {name, email, mobile, password, experience, expertise} = req.body;
    const myquery = `user (name, email, password, mobile, experience, expertise)
    VALUES (?, ?, ?, ?, ?, ?)`;
    const value = [
      filter.clean(name),
      filter.clean(email),
      filter.clean(password),
      filter.clean(mobile),
      filter.clean(experience),
      filter.clean(expertise),
    ];

    const response = await insertQuery(myquery, value);

    return res.status(200).json({data: response});
  }
}
