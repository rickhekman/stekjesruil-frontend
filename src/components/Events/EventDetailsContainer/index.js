import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadEvent, deleteEvent } from '../../../actions/events/events-actions';
import EventDetails from './EventDetails';


class EventDetailsContainer extends Component {

  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onClick = () => {
    window.location.assign(this.props.event.eventurl)
  }

  onWebsiteClick = () => {
    window.location.assign(this.props.event.website)
  }

  onDelete = () => {
    this.props.deleteEvent(this.props.event.id)
    this.props.history.push('/')
  }

  render() {

    return (
      <div>
        <EventDetails
          event={this.props.event}
          onWebsiteClick={this.onWebsiteClick}
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
