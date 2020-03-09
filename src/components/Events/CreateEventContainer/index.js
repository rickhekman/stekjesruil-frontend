import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../../actions/events/events-actions';
import EventForm from '../EventForm/index';

class CreateEventContainer extends Component {

  state = {
    title: '',
    photo: '',
    description: '',
    startdate: '',
    enddate: '',
    locationname: '',
    address1: '',
    address2: '',
    zipcode: '',
    city: '',
    country: '',
    geolocation: '',
    eventurl: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createEvent(this.state)
    this.setState({
      title: '',
      photo: '',
      description: '',
      startdate: '',
      enddate: '',
      locationname: '',
      address1: '',
      address2: '',
      zipcode: '',
      city: '',
      country: '',
      geolocation: '',
      eventurl: ''
    })
  }

  render() {
    return (<div>
      <EventForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    </div>
    )
  }
}


export default connect(null, { createEvent })(CreateEventContainer)