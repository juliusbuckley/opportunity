import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import fetch from 'cross-fetch'

import { connect } from 'react-redux';
import {store} from '../index'
import { profileActions } from '../redux/modules/profile';
import { types } from '../redux/modules/profile/types';

export const runner = ({ dispatch, getState }) => next => action => {
    console.log("Middleware triggered:", action.type);
    if (action.type == 'SEEKER_CREATE'){
      console.log('action')
      profileActions.createSeekerAccount(action.membership,action.seeker).then(seeker=>{
        seeker = seeker.data;
        console.log(seeker)
        dispatch({type: 'SEEKER_USER', seeker})
      })
    }
    if (action.type == 'SEEKER_UPDATE'){
      console.log('action')
      profileActions.updateSeekerAccount(action.membership,action.seeker).then(seeker=>{
        seeker = seeker.data;
        console.log(seeker)
        dispatch({type: 'SEEKER_USER', seeker})
      })
    }
    if (action.type == 'SEEKER_FETCH_OR_CREATE'){
      console.log('action')
      profileActions.fetchOrCreateSeekerAccount(action.membership).then(seeker=>{
        seeker = seeker.data;
        console.log(seeker)
        dispatch({type: 'SEEKER_USER', seeker})
      })
    }
    if (action.type == 'MEMBERSHIP_FETCH_OR_CREATE') {
      console.log('fetching whore')
      // profileActions.fetchMembership(getState());
      profileActions.fetchOrCreateMembership(action.profile).then(membership =>{
        membership = membership.data
        if (membership.isSeeker){
          console.log('a seeker big fella')
          dispatch({ type: 'SEEKER_FETCH_OR_CREATE', membership})
          // profileActions.getSeekerAccountRequest(membership)
        } else{
          console.log('not a seeker big fella')
          dispatch({ type: 'MEMBERSHIP_ACCOUNT', membership})
        }
      })
    }
    return next(action);
}



export const setMembership = (profile, membership) => {
  // Invert control!
 // Return a function that accepts `dispatch` so we can dispatch later.
 // Thunk middleware knows how to turn thunk async actions into actions.

 return function (dispatch) {
   return getMembership(profile).then(
     membership => dispatch(makeASandwich(forPerson, sauce)),
     error => dispatch(apologize('The Sandwich Shop', forPerson, error))
   );
 };
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
