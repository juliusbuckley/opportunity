import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SeekerPage from '../components/SeekerPage/SeekerPage'
import axios from 'axios'

class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName : ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount(){

  }
  handleChange(e){

    this.setState({userName:e.target.value})
    console.log(e.target.value)
  }
  handleSubmit(){
    console.log()

  }
  render(){
    return(
      <SeekerPage profile={this.props.profile} userName={this.state.userName} handleChange={this.handleChange}/>
    )
  }
}

export default EditProfile
