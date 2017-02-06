import 'whatwg-fetch';
import getBaseUrl from './baseUrl';


const baseUrl = getBaseUrl();


export function getUsers() {
  return get(`${baseUrl}/users`);
}


export function deleteUser(id) {
  return del(`${baseUrl}/users/${id}`);
}


function get(url) {
  return fetch(url).then(onSuccess, onError);
}


// Can't name function 'delete' because it's a reserved word.
function del(url) {
  const request = new Request(url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}


function onSuccess(response) {
  return response.json();
}


function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
