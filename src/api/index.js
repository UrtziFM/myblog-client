const BASE_URL = 'http://localhost:3001';

const buildUrl = (uri = '', query = '') => `${BASE_URL}${uri}${query}`;

export const getRequest = (uri, headers = {}) => {
  const url = buildUrl(uri);

  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' ,
      'Access-Control-Allow-Headers': 'Content-Type',
      ...headers
    }
  });
};

export const postRequest = (uri, body, headers = {}) => {
  const url = buildUrl(uri);

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' ,
      'Access-Control-Allow-Headers': 'Content-Type',
      ...headers
    }
  });
};
