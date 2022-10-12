/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */
const BASE_URL = 'https://eoj3r7f3r4ef6v4.m.pipedream.net';

function __getResponseData(res) {
  if (res.ok) {
    return res.json();
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function sendData(data) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => __getResponseData(res));
}
