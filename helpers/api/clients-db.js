import Filter from 'bad-words';
import {insertQuery} from 'services/query';

const filter = new Filter();

export const clientsDb = {
  contact,
};

async function contact(data) {
  const {name, company_name, contact_email, project_desc, keywords} = data;

  console.log('key - ', data);

  const myquery = `company (name, company_name, contact_email, project_desc, keywords) VALUES (?, ?, ?, ?, ?)`;
  const value = [name, company_name, contact_email, project_desc, keywords];

  try {
    const response = await insertQuery(myquery, value);
    const rows = response && response.affectedRows;

    console.log('db - res = ', response);
    if (rows === 1) {
      return {
        message: 'success',
      };
    }
  } catch (error) {
    // console.log('db error = ', error);
  }
}
