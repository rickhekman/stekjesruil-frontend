import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Moment from 'react-moment';

import TrashIcon from '../../../img/icons/trashcan.svg';
import FbIcon from '../../../img/icons/fb-box-fill.svg';

function EventDetails(props) {

  const { event } = props;

  const { t } = useTranslation();

  return (
    <div>
      {event
        ? <div className="eventpopup">

          <div className="eventdetails">


            <Link to={`/events/`}
              style={{
                textDecoration: 'none'
              }}
              key={event}
              className="eventdetails__close"
            >
              <p>X</p>
            </Link>

            <img src={event.photo} alt={event.title} className="eventdetails__photo" />
            <h1 className="eventdetails__title heading--primary">{event.title}</h1>
            <div className="eventdetails__date">
              <p>
                <Moment format="dddd D MMMM YYYY">
                  {event.startdate}
                </Moment>
              </p>
            </div>
            <div className="eventdetails__time">
              <p>
                <Moment format="HH:mm -">
                  {event.startdate}
                </Moment>
                <Moment format=" HH:mm">
                  {event.enddate}
                </Moment>
              </p>
            </div>
            <div className="eventdetails__description">
              <p className="paragraph">{event.description}</p>
            </div>
            <div className="eventdetails__location">
              <p className="paragraph" style={{ fontWeight: '600', fontSize: '1.5rem' }}>{t('event.location')}</p>
              <p className="paragraph">{event.locationname}</p>
              <p className="paragraph">{event.address1}</p>
              <p className="paragraph">{event.address2}</p>
              <p className="paragraph">{event.zipcode} {event.city}</p>
              <p className="paragraph">{event.country}</p>
              <p className="paragraph">{event.geolocation}</p>
              <button type="button" onClick={props.onWebsiteClick} className="eventdetails__btn-website btn btn--yellow">{t('event.website')}</button>
            </div>
            <div className="eventdetails__fb-event" onClick={props.onClick}>
              <img src={FbIcon} alt="icon" /><p className="paragraph">{t('event.fb')}</p>
            </div>

            <img src={TrashIcon} type="button" onClick={props.onDelete} className="eventdetails__delete" alt="delete icon" />
          </div>

        </div>
        : 'Event details are loading...'
      }
    </div>
  )
}

export default EventDetails
