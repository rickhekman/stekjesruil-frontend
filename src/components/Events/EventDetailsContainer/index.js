import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDetails from './EventDetails';
import { loadEvent, deleteEvent } from '../../../actions/events/events-actions';

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




  onClick = () => {
    window.location.assign('http://www.google.com');
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  render() {
    // console.log('State eventurl', this.state.eventurl)
    // console.log('Button clicked!', this.onClick)
    // console.log('ONDELETE FUNCTION ID', this.props.event.id)
    // console.log('Event url props test', this.props.event)

    return (
      <div>
        <EventDetails
          event={this.props.event}
          onClick={this.onClick}
          onDelete={this.onDelete}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, { loadEvent, deleteEvent })(EventDetailsContainer)