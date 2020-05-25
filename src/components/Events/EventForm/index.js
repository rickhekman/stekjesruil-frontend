import React from 'react';
import { useTranslation } from 'react-i18next';

function EventForm(props) {

  const { t } = useTranslation();

  const {
    onChange,
    onSubmit,
    values: {
      title,
      photo,
      description,
      website,
      startdate,
      enddate,
      locationname,
      address1,
      address2,
      zipcode,
      city,
      country,
      latitude,
      longitude,
      eventurl
    }
  } = props;

  return (<div className="eventsform-container">
    <div className="eventsform">
      <div className="u-margin-bottom-medium">
        <h2 className="heading--secondary">{t('event-form.title')}</h2>
      </div>
      <form onSubmit={onSubmit} className="form">

        <div className="form__group">
          <label for="title" className="form__label">Title </label>
          <input
            className="form__input"
            id="title"
            type="text"
            onChange={onChange}
            name="title"
            value={title}
            placeholder="Title"
            required
          />
        </div>

        <div className="form__group">
          <label for="photo" className="form__label">Photo </label>
          <input
            className="form__input"
            id="photo"
            onChange={onChange}
            name="photo"
            value={photo}
            placeholder="Photo url"
            required
          />
        </div>

        <div className="form__group">
          <label for="date-start" className="form__label">Start </label>
          <input
            className="form__input"
            id="date-start"
            type="date"
            onChange={onChange}
            name="startdate"
            min={"2016-01-01"}
            value={startdate}
            required
          />
          <label for="date-end" className="form__label">End </label>
          <input
            className="form__input"
            id="date-end"
            type="date"
            onChange={onChange}
            name="enddate"
            min={"2016-01-01"}
            value={enddate}
            required
          />
        </div>
        <div className="form__group">
          <label for="description" className="form__label">Description </label>
          <textarea
            className="form__input"
            id="description"
            type='text'
            onChange={onChange}
            name="description"
            value={description}
            placeholder="Event description"
            required
          />
        </div>
        <div className="form__group">
          <label for="website" className="form__label">Location website </label>
          <input
            className="form__input"
            id="website"
            type="text"
            onChange={onChange}
            name="website"
            value={website}
            placeholder="Location website"
            required
          />
        </div>
        <div className="form__group">
          <label for="location-name" className="form__label">Location name </label>
          <input
            className="form__input"
            id="location-name"
            type="text"
            onChange={onChange}
            name="locationname"
            value={locationname}
            placeholder="Location name"
            required
          />
        </div>
        <div className="form__group">
          <label for="address1" className="form__label">Location address 1 </label>
          <input
            className="form__input"
            id="address1"
            type="text"
            onChange={onChange}
            name="address1"
            value={address1}
            placeholder="Location address 1"
            required
          />
        </div>
        <div className="form__group">
          <label for="address2" className="form__label">Location address 2 </label>
          <input
            className="form__input"
            id="address2"
            type="text"
            onChange={onChange}
            name="address2"
            value={address2}
            placeholder="Location address 2"
            required
          />
        </div>
        <div className="form__group">
          <label for="zip" className="form__label">Zip code </label>
          <input
            className="form__input"
            id="zip"
            type="text"
            onChange={onChange}
            name="zipcode"
            value={zipcode}
            placeholder="Zip code"
            required
          />
        </div>
        <div className="form__group">
          <label for="city" className="form__label">City </label>
          <input
            className="form__input"
            id="title"
            type="city"
            onChange={onChange}
            name="city"
            value={city}
            placeholder="City"
            required
          />
        </div>
        <div className="form__group">
          <label for="country" className="form__label">Country </label>
          <input
            className="form__input"
            id="country"
            type="text"
            onChange={onChange}
            name="country"
            value={country}
            placeholder="Country"
          />
        </div>
        <div className="form__group">
          <label for="latitude" className="form__label">Location latitude </label>
          <input
            className="form__input"
            id="latitude"
            type="text"
            onChange={onChange}
            name="latitude"
            value={latitude}
            placeholder="Location latitude"
            required
          />
        </div>
        <div className="form__group">
          <label for="longitude" className="form__label">Location longitude </label>
          <input
            className="form__input"
            id="longitude"
            type="text"
            onChange={onChange}
            name="longitude"
            value={longitude}
            placeholder="Location longitude"
            required
          />
        </div>
        <div className="form__group">
          <label for="fb-event" className="form__label">Facebook event </label>
          <input
            className="form__input"
            id="fb-event"
            type="url"
            onChange={onChange}
            name="eventurl"
            value={eventurl}
            placeholder="Facebook event"
            required
          />
        </div>
        <div className="u-margin-top-big">
          <input type="submit" className="btn btn--form-blue" value={t('event-form.submit')} />
        </div>

      </form>
    </div>
  </div>
  )
}

export default EventForm