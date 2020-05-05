import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllEvents } from '../../../actions/events/events-actions'
import EventsList from './EventsList'

class EventsListcontainer extends Component {
  componentDidMount() {
    this.props.getAllEvents()
  }

  render() {
    return (
      <div>
        <EventsList events={this.props.events} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(mapStateToProps, { getAllEvents })(EventsListcontainer)
