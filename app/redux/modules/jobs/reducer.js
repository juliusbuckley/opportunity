import * as types from './types';
import * as ProfileService from '../../../utils/ProfileService';

const profileReducer = (
  state = {
    membership: {},
    isFetching: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case types.MEMBERSHIP_FETCH:
      return {
        ...state,
        isFetching: true,
        error: null,
        membership: {}

      };
    case types.MEMBERSHIP_ACCOUNT:
      return {
        ...state,
        isFetching: false,
        isSeeker: false,
        membership: action.membership
      };
    case types.MEMBERSHIP_SEEKER:
      return {
        ...state,
        isFetching: false,
        isSeeker: true,
        membership: action.membership
      };
    case types.SEEKER_USER:
      return {
        ...state,
        seeker: action.seeker
      };
    case types.MEMBERSHIP_ERROR:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        membership: {},
        error: action.error
      };
    case types.MEMBERSHIP_ACCOUNT:
      return {
        ...state,
        isAuthenticated: false,
        membership: {}
      };
    case types.SEEKER_CREATE:
      return {
        ...state,
        isFetching: true,
        seeker: {}
      };
    case types.SEEKER_UPDATE:
      return {
        ...state,
        isFetching: true,
        seeker: {}
      };
    case types.SEEKER_FETCH:
      return {
        ...state,
        isFetching: true,
        membership: action.membership,
        seeker: {}
      };
    default:
      return state;
  }
};

export default profileReducer;
