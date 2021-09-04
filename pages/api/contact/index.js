import Filter from 'bad-words';
import {insertQuery} from 'services/query';

const filter = new Filter();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      first_name,
      last_name,
      company,
      business_number,
      business_email,
      location,
      message,
    } = req.body;
    const name = first_name + ' ' + last_name;
    const myquery = `company (name, company, business_number, business_email, location, message)
    VALUES (?, ?, ?, ?, ?, ?)`;
    const value = [
      filter.clean(name),
      filter.clean(company),
      filter.clean(business_number),
      filter.clean(business_email),
      filter.clean(location),
      filter.clean(message),
    ];

    const {data} = await insertQuery(myquery, value);

    return res.status(200).json({message: data});
  }
}
