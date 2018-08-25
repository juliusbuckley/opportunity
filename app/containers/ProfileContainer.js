import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as ProfileService from '../utils/ProfileService';

import SeekerProfile from '../components/SeekerProfile'
import React, { Component } from 'react';

const mapStateToProps = ({ state }) => {
  return {
    profile: 'state.profile'
  }
};

// const mapDispatchToProps = (dispatch) => {
//   membershipFetch: profile => dispatch(profileActions.membershipFetch(profile))
//
// }

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(SeekerProfile)
);
