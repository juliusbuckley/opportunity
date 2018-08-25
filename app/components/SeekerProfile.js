import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PropTypes from 'prop-types';

import { Form, FormControl, FormGroup, Col, ControlLabel, Button, HelpBlock, Radio, FieldGroup, Checkbox } from 'react-bootstrap'
import { profileActions } from '../redux/modules/profile'
class SeekerProfile extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    profile: PropTypes.object.isRequired,
    updateSeekerAccount: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLog = this.handleLog.bind(this);


  }
  componentWillMount(){
    const { membership, updateSeekerAccount } = this.props
    console.log(this.props)
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value},()=>console.log(this.state))
  }
  handleLog(date) {
		this.setState({
			dateOfBirth: date
		});
	}


  handleSubmit(e){
    const { updateSeekerAccount } = this.props
    e.preventDefault()
    updateSeekerAccount(this.props.profile.membership,this.state)
    console.log(this.state.userName)
//
  }
  render() {
    // console.log(this.props)
    return(
    <div>
      <h2>Create Seeker Account</h2>
      <Form>
        <FormGroup controlId="formControlsTextarea">
          <Col componentClass={ControlLabel} sm={2}>
            <ControlLabel>Enter First Name</ControlLabel>
            <FormControl type="text" placeholder="" name="firstName" onChange={this.handleChange} value={this.props.profile.seeker.firstName}/>
          </Col>
          <Col componentClass={ControlLabel} sm={2}>
            <ControlLabel>Enter Last Name</ControlLabel>
            <FormControl type="text" placeholder="" name="lastName" onChange={this.handleChange} value={this.props.profile.seeker.lastName}/>
          </Col>
          <Col componentClass={ControlLabel} sm={2}>
            <ControlLabel>Enter Username</ControlLabel>
            <FormControl type="text" placeholder="" name="userName" onChange={this.handleChange} value={this.props.profile.seeker.userName}/>
          </Col>
          <Col componentClass={ControlLabel} sm={2}>
            <ControlLabel>Enter Date of Birth</ControlLabel>
            {/* <DatePicker
              selected={this.props.profile.seeker.dateOfBirth}
              onChange={this.handleLog}
            /> */}
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
         <Col componentClass={ControlLabel} sm={2}>
           Email
           <FormControl type="email" placeholder="Email" value={this.props.profile.membership.accountEmailAddress} />
         </Col>
         <Col componentClass={ControlLabel} sm={2}>
           Gender
           <Radio name="gender" value="Male" onChange={this.handleChange} inline>
             Male
           </Radio>{' '}
           <Radio name="gender" value="Female" onChange={this.handleChange}  inline>
             Female
           </Radio>{' '}
           <Radio name="gender" value="N/A" onChange={this.handleChange}  inline>
             Prefer Not To Answer
           </Radio>
         </Col>
         <Col componentClass={ControlLabel} sm={3}>
           <ControlLabel>Enter Website</ControlLabel>
           <FormControl type="text" placeholder="" name="websiteUrl" onChange={this.handleChange} value={this.props.profile.seeker.websiteUrl}/>
         </Col>
       </FormGroup>



       <FormGroup>
         <Col smOffset={2} sm={10}>
           <Checkbox>Remember me</Checkbox>
         </Col>
       </FormGroup>

       <FormGroup>
         <Col smOffset={2} sm={10}>
           <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
         </Col>
       </FormGroup>
      </Form>
    </div>
  );
  }
}
const mapStateToProps = ({ profile }) => ({
  profile
})
const mapDispatchToProps = dispatch => ({
  updateSeekerAccount: (profile, seeker) => dispatch(profileActions.updateSeekerAccountRequest(profile, seeker))
})
export default withRouter(
  connect(
    mapStateToProps, // no mapStateToProps
    mapDispatchToProps
  )(SeekerProfile)
);
// export default Profile;
