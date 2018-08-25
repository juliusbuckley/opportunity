import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import fetch from 'cross-fetch'

import { authActions } from '../../redux/modules/auth';
import { profileActions } from '../../redux/modules/profile';
import axios from 'axios'

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ProfileContainer from '../ProfileContainer'
import OpportunityContainer from '../OpportunityContainer'
import Header from '../Header/Header';
import HomePage from '../../components/HomePage/HomePage';
import SeekerProfile from '../../components/SeekerProfile';
import SeekerPage from '../../components/SeekerPage/SeekerPage';
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage';
import * as AuthService from '../../utils/AuthService';
import * as ProfileService from '../../utils/ProfileService';

class App extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    profile: PropTypes.object.isRequired,
    loginError: PropTypes.func.isRequired,
    loginSuccess: PropTypes.func.isRequired,
    membershipFetch: PropTypes.func.isRequired,
    membershipUser: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { history, profile, loginError, loginSuccess, membershipFetch, membershipUser } = this.props;
    // Add callback for lock's `authenticated` event
    AuthService.lock.on('authenticated', authResult => {
      AuthService.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          return loginError(error);
        }
        // console.log(profile)
        console.log(authResult)
        AuthService.setToken(authResult.idToken); // static method
        AuthService.setProfile(profile); // static method
        loginSuccess(profile);
        history.push({ pathname: '/' });
        AuthService.lock.hide();
        membershipFetch(profile)
        // t membershipFetch(profile)
        // ProfileService.getMembership(profile)
        // this.props.


      });
    });

    // Add callback for lock's `authorization_error` event
    AuthService.lock.on('authorization_error', error => {
      loginError(error);
      history.push({ pathname: '/' });
    });
  }

  render() {
    const { profile } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfileContainer}/>
          <Route exact path="/opportunties" component={OpportunityContainer}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile
})

const mapDispatchToProps = dispatch => ({
  membershipFetch: profile => dispatch(profileActions.membershipFetch(profile)),
  seekerFetch: profile => dispatch(profileActions.getSeekerAccountRequest(profile)),
  membershipUser: profile => dispatch(profileActions.membershipUser(profile)),
  loginSuccess: profile => dispatch(authActions.loginSuccess(profile)),
  loginError: error => dispatch(authActions.loginError(error))
});

export default withRouter(
  connect(
    mapStateToProps, // no mapStateToProps
    mapDispatchToProps
  )(App)
);
