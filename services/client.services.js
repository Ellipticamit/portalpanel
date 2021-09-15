import getConfig from 'next/config';
import {fetchWrapper} from 'helpers';

const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}`;

export const clientService = {
  contact,
};

function contact(data) {
  console.log('contact called = url = ', `${baseUrl}/contact`);
  return fetchWrapper.post(`${baseUrl}/contact`, data);
}
