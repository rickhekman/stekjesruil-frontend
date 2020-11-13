import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

function EventsList(props) {

  return (
    <div className="events--list">
      {props.events.eventsList
        ? props.events.eventsList.map(
          event => <Link to={`/events/${event.id}`}
            style={{
              textDecoration: 'none'
            }} key={event.id}>
            <div className="event">
                <img src={event.photo} alt={event.title} className="event__photo" />
                <h3 className="event__name">{event.title}</h3>
                <p className="event__date">
                <Moment format="D MMMM YYYY">
                  {event.startdate}
                </Moment>
              </p>
            </div>
          </Link>
        )
        : 'Loading events...'
      }

      <div className="events__button">
        <Link to="/create-event/"><button className="btn btn--form-blue">Create event</button></Link>
      </div>

    </div>
  )
}

export default EventsList;