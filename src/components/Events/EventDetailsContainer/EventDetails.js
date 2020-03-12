import React from 'react';
import { withTranslation } from 'react-i18next';

function EventDetails(props) {

  const { t, event } = props

  return (
    <div>
      {event
        ? <div>
          <h1>{event.title}</h1>
          <img src={event.photo} alt={event.title} />
          <p>{t('event.date')}{event.startdate}</p>
          <p>{event.enddate}</p>
          <p>{t('event.description')}{event.description}</p>
          <button type="button" onClick={props.onWebsiteClick}>{t('event.website')}</button> <br />
          <p>{t('event.location')}{event.locationname}</p>
          <p>{event.address1}</p>
          <p>{event.address2}</p>
          <p>{event.zipcode}</p>
          <p>{event.city}</p>
          <p>{event.country}</p>
          <p>{event.geolocation}</p>
          <button type="button" onClick={props.onClick}>{t('event.fb')}</button> <br />
          <button type="button" onClick={props.onDelete}>Delete this event</button>
        </div>
        : 'Event details are loading...'
      }
    </div>
  )
}

export default withTranslation()(EventDetails)
