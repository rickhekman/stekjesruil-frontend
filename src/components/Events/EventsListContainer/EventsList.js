import React from 'react';
import { Link } from 'react-router-dom';

export default function EventsList(props) {

  return (
    <div>
      <ul>
        {props.events.eventslist
          ? props.events.eventslist.map(
            event => <Link to={`/events/${event.id}`}
              style={{
                textDecoration: 'none'
              }} key={event.id}>
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
