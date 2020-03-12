import React from 'react';
import { Link } from 'react-router-dom';

export default function EventsList(props) {

  return (
    <div>
      <div>
        <Link to="/create-event/"><button className="btn btn--yellow">Create event</button></Link>
      </div>
      <div>
        <ul>
          {props.events.eventsList
            ? props.events.eventsList.map(
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

    </div>
  )
}
