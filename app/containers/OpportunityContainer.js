import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileActions } from '../redux/modules/profile';
import PropTypes from 'prop-types';
import Opportunity from '../components/Opportunity'
import * as ProfileService from '../utils/ProfileService';

import React, { Component } from 'react';
class OpportunityContainer extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    profile: PropTypes.object.isRequired,
    membershipUser: PropTypes.func.isRequired
  }

  componentWillMount(){
    const { profile, membershipUser } = this.props
    // console.log(this.props.profile)
  }

  render(){
    return(
      <div> Freshly bitch
        <Opportunity />

      </div>

    )
  }
}
const mapStateToProps = ({ state }) => {
  return {
    membershipFetch: profile => dispatch(profileActions.fetchMembership(profile)),
  }
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(OpportunityContainer)
);
