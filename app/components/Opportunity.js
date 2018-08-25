import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import { Form, FormControl, FormGroup, Col, ControlLabel, Button, HelpBlock, Radio, FieldGroup, Checkbox } from 'react-bootstrap'
import { profileActions } from '../redux/modules/profile'
import { jobActions } from '../redux/modules/jobs'
class Opportunity extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    fetchJobs: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

  }
  componentWillMount(){
    const { fetchJobs } = this.props
    console.log(this.props)
  }

  render() {
    // console.log(this.props)
    return(
    <div>
      <h2>Opportunties</h2>

    </div>
  );
  }
}
const mapStateToProps = ({ profile }) => ({
  profile
})
const mapDispatchToProps = dispatch => ({
  fetchJobs: profile => dispatch(jobActions.fetchJobPosts())
})
export default withRouter(
  connect(
    mapStateToProps, // no mapStateToProps
    mapDispatchToProps
  )(Opportunity)
);
// export default Profile;
