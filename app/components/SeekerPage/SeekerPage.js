import React from 'react';
import { Form, FormControl, FormGroup, ControlLabel, Button, HelpBlock, Radio, FieldGroup, Checkbox } from 'react-bootstrap'

const SeekerPage = (props) => {

console.log(props)
    return(
    <div>
      <h2>Create Account</h2>
      <Form>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Enter username</ControlLabel>
            <FormControl componentClass="textarea" placeholder="@" onChange={props.handleChange} value={props.userName}/>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
    </div>
  );
}
// <fieldset>
// <legend>Sign up</legend>
// <p>
// <input type="email" id="signup-email" placeholder="Email" required/>
// </p>
// <p>
// <input type="radio" name="gender" value="male" checked/> Male
// <input type="radio" name="gender" value="female"/> Female
//
// </p>
// <p>
// <input type="text" id="firstName" placeholder="First name" required/>
// </p>
// <p>
// <input type="text" id="lastName" placeholder="First name" required/>
// </p>
// <p>
// <input type="text" id="lastName" placeholder="Phone number" required/>
// </p>
// <p>
// <input type="text" id="accountEmailAddress" placeholder="emailAddress" required/>
// </p>
// <p>
// <input type="date" id="dateOfBirth" placeholder="Date of birth" required/>
// </p>
// <p>
// <input type="radio" name="smsNotificationActive" value="true" checked/> Yes
// <input type="radio" name="smsNotificationActive" value="false"/> No
// </p>
// <input type="submit" value="Sign up"/>
// </fieldset>

export default SeekerPage
