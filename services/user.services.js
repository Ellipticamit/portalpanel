import {BehaviorSubject} from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

import {fetchWrapper} from 'helpers';

const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(
  process.browser && JSON.parse(localStorage.getItem('user'))
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  mobilelogin,
  logout,
  register,
  completeProfile,
  getUserProfile,
  updateProfile,
  updateUser,
};

function login(email, password) {
  return fetchWrapper
    .post(`${baseUrl}/login`, {email, password})
    .then((user) => {
      // publish user to subscribers and store in local storage to stay logged in between page refreshes
      userSubject.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

function mobilelogin(mobile) {
  return fetchWrapper.post(`${baseUrl}/mobilelogin`, {mobile}).then((user) => {
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    // userSubject.next(user);
    // localStorage.setItem('user', JSON.stringify(user));

    return '';
  });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem('user');
  userSubject.next(null);
  Router.push('/login');
}

function register(user) {
  return fetchWrapper.post(`${baseUrl}/register`, user);
}

function updateUser(user) {
  return fetchWrapper.put(`${baseUrl}/register`, user).then((response) => {
    console.log('update user sadfasdfadsfa = ', response);
    const {data} = response;
    userSubject.next(data);
    localStorage.setItem('user', JSON.stringify(data));

    return data;
  });
}

function completeProfile(profileData) {
  return fetchWrapper.post(`${baseUrl}/profile`, profileData);
}

function updateProfile(profileData) {
  return fetchWrapper.put(`${baseUrl}/profile`, profileData);
}

function getUserProfile(uid) {
  return fetchWrapper.get(`${baseUrl}/profile/?uid=${uid}`);
}
