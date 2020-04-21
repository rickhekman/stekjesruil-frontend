import React from 'react';
import { Link } from 'react-router-dom';

export default function EventsList(props) {

  return (
    <div className="events--list u-margin-top-big">
      {props.events.eventsList
        ? props.events.eventsList.map(
          event => <Link to={`/events/${event.id}`}
            style={{
              textDecoration: 'none'
            }} key={event.id}>
            <div className="event">
              <img src={event.photo} alt={event.title} className="event--photo" />
              <h3 className="event--name">{event.title}</h3>
              <p className="event--date">{event.startdate}</p>
            </div>
          </Link>
        )
        : 'Loading events...'
      }

      <div className="events--list__button">
        <Link to="/create-event/"><button className="btn btn--form-blue">Create event</button></Link>
      </div>

    </div>
  )
}
