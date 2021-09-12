import Filter from 'bad-words';
import {insertQuery} from 'services/query';

const filter = new Filter();

export const clientsDb = {
  contact,
};

async function contact(data) {
  const {
    first_name,
    last_name,
    company,
    business_number,
    business_email,
    location,
    message,
  } = data;

  const name = first_name + ' ' + last_name;
  const myquery = `company (name, company, business_number, business_email, location, message)
  VALUES (?, ?, ?, ?, ?, ?)`;
  const value = [
    name,
    company,
    business_number,
    business_email,
    location,
    message,
  ];

  try {
    const response = await insertQuery(myquery, value);
    const rows = response && response.affectedRows;

    console.log('res  contact = ', response);

    if (rows === 1) {
      return {
        message: 'success',
      };
    }
  } catch (error) {
    // console.log('db error = ', error);
  }
}
