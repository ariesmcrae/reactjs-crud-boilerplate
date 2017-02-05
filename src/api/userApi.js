import 'whatwg-fetch';
import getBaseUrl from './apiUrl';

const baseUrl = getBaseUrl();


export function getUsers() {
    return get('users');
}


function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}


function onSuccess(response) {
    return response.json();
}


function onError(error) {
    console.log(error); //eslint-disable-line no-console
}
