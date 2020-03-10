import React from 'react';
import { Link } from 'react-router-dom';

export default function EventsList(props) {
  // Depending on how te response of the action is made
  console.log('PROPS', props)
  console.log('EVENT PROPS', props.events.eventslist)
  return (
    <div>
      <ul>
        {props.events.eventslist
          ? props.events.eventslist.map(
            event => <Link to={`/events/${event.id}`}
              style={{
                textDecoration: 'none'
              }}>
              <div key={event.id}>
                <h1>{event.title}</h1>
                <img src={event.photo} alt={event.title} />
                <p>{event.startdate} - {event.enddate}</p>
              </div>
            </Link>
          )
          : 'Loading events...'
        }
      </ul>
    </div>
  )
}
