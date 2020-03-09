import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDetails from './EventDetails';
import { loadEvent } from '../../../actions/events/events-actions';

class EventDetailsContainer extends Component {

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

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
  render() {
    return (
      <div>
        <EventDetails
          event={this.props.event}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { loadEvent })(EventDetailsContainer)