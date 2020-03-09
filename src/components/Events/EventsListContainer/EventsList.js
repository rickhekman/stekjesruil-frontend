import React from 'react'

export default function EventsList(props) {
  return (
    <div>
      <ul>
        {props.events.data
          ? props.events.data.map(
            event => <div key={event.id}>
              <h1>{event.title}</h1>
              <img src={event.photo} alt={event.title} />
              <p>{event.startdate} - {event.enddate}</p>
            </div>
          )
          : 'Loading events...'
        }
      </ul>
    </div>
  )
}
