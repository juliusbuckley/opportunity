import Auth0Lock from 'auth0-lock';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

// Configure Auth0 lock
export const lock = new Auth0Lock(process.env.YOUR_AUTH0_CLIENT_ID, process.env.YOUR_AUTH0_DOMAIN, {
  auth: {
    redirectUrl: process.env.YOUR_AUTH0_CALLBACK_URL,
    responseType: 'token id_token'
  },
  theme: {
    primaryColor: '#b81b1c'
  },
  languageDictionary: {
    title: 'Opportunity'
  }
});

export const login = () => {
  // Call the show method to display the widget.
  lock.show();
};

export const loggedIn = () => {
  // Checks if there is a saved token and it's still valid
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

export const logout = () => {
  // Clear user token and profile data from window.localStorage
  localStorage.removeItem('id_token');
  localStorage.removeItem('profile');
};

export const getProfile = () => {
  // Retrieves the profile data from window.localStorage
  const profile = window.localStorage.getItem('profile');
  // axios.post('/m',{
  //   seekerUserId: null,
  //   accountPhoneNumber: null,
  //   accountEmailAddress: profile.email,
  //   isSeeker: true,
  //   createdAt: new Date(),
  //   updatedAt: new Date()
  // }).then(res=>{
  //   console.log(res)
  //   profile.db = res.data
  //   return profile ? JSON.parse(window.localStorage.profile) : {};
  // }).catch(err=>{
  //
  // })
  return profile ? JSON.parse(window.localStorage.profile) : {};
};

export const setProfile = profile => {
  // Saves profile data to window.localStorage
  window.localStorage.setItem('profile', JSON.stringify(profile));
  // Triggers profile_updated event to update the UI
};

export const setToken = idToken => {
  // Saves user token to window.localStorage
  window.localStorage.setItem('id_token', idToken);
};

export const getToken = () => {
  // Retrieves the user token from window.localStorage
  return window.localStorage.getItem('id_token');
};

export const getTokenExpirationDate = () => {
  const token = getToken();
  const decoded = jwtDecode(token);
  if (!decoded.exp) {
    return null;
  }

  const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
  date.setUTCSeconds(decoded.exp);
  return date;
};

export const isTokenExpired = () => {
  const token = getToken();
  if (!token) return true;
  const date = getTokenExpirationDate();
  const offsetSeconds = 0;
  if (date === null) {
    return false;
  }
  return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
};
