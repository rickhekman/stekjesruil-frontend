import React from 'react';

export default function EventForm(props) {
  const {
    onChange,
    onSubmit,
    values: {
      title,
      photo,
      description,
      startdate,
      enddate,
      locationname,
      address1,
      address2,
      zipcode,
      city,
      country,
      geolocation,
      eventurl
    }
  } = props;

  return (
    <div>
      <div>
        <h1>Create an event</h1>
      </div>
      <form onSubmit={onSubmit}>

        <div>
          <label>Title </label>
          <input
            type="text"
            onChange={onChange}
            name="title"
            value={title}
            placeholder="Title"
          />
        </div>

        <div>
          <label>Photo </label>
          <input
            onChange={onChange}
            name="photo"
            value={photo}
            placeholder="Photo url"
          />
        </div>

        <div>
          <label>Start </label>
          <input
            type="datetime-local"
            onChange={onChange}
            name="startdate"
            min={"2016-01-01"}
            value={startdate}
          />
          <label>End </label>
          <input
            type="datetime-local"
            onChange={onChange}
            name="enddate"
            min={"2016-01-01"}
            value={enddate}
          />
        </div>
        <div>
          <label>Description </label>
          <textarea
            type='text'
            onChange={onChange}
            name="description"
            value={description}
            placeholder="Event description"
          />
        </div>
        <div>
          <label>Location name </label>
          <input
            type="text"
            onChange={onChange}
            name="locationname"
            value={locationname}
            placeholder="Location name"
          />
        </div>
        <div>
          <label>Location address 1 </label>
          <input
            type="text"
            onChange={onChange}
            name="address1"
            value={address1}
            placeholder="Location address 1"
          />
        </div>
        <div>
          <label>Location address 2 </label>
          <input
            type="text"
            onChange={onChange}
            name="address2"
            value={address2}
            placeholder="Location address 2"
          />
        </div>
        <div>
          <label>Zip code </label>
          <input
            type="text"
            onChange={onChange}
            name="zipcode"
            value={zipcode}
            placeholder="Zip code"
          />
        </div>
        <div>
          <label>City </label>
          <input
            type="text"
            onChange={onChange}
            name="city"
            value={city}
            placeholder="City"
          />
        </div>
        <div>
          <label>Country </label>
          <input
            type="text"
            onChange={onChange}
            name="country"
            value={country}
            placeholder="Country"
          />
        </div>
        <div>
          <label>Geolocation </label>
          <input
            type="text"
            onChange={onChange}
            name="geolocation"
            value={geolocation}
            placeholder="Geolocation"
          />
        </div>
        <div>
          <label>Facebook event </label>
          <input
            type="url"
            onChange={onChange}
            name="eventurl"
            value={eventurl}
            placeholder="Facebook event"
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  )
}

