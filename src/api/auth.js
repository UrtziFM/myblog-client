import { getRequest, postRequest } from './index';

export const isLoggedIn = async token => {
  const res = await getRequest('/auth/is-logged', { Authorization: token });

  if (!res.ok) {
    throw new Error('User not authenticated');
  }

  return true;
};

/**
 *
 * @param {Object} body
 * @param {string} body.email
 * @param {string} body.password
 */
export const reader = async body => {
  const res = await postRequest('/auth/login', body);
  const response = await res.json();

  if (!res.ok) {
    throw new Error(response);
  }

  //return response.redirect('/home')
  return response
};

/**
 *
 * @param {Object} body
 * @param {string} body.email
 * @param {string} body.password
 */
export const login = async body => {
  const res = await postRequest('/auth/login', body);
  const response = await res.json();

  if (!res.ok) {
   throw new Error(response); 
    
  }

  return response
};
