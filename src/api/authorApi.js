import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/authors/';

export function getAuthors() {
  // fetch is a node built in function, based on Promise
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
