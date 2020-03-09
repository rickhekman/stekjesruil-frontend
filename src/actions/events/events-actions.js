import axios from 'axios'

const baseUrl = 'http://localhost:4000'

// Create an event
export const CREATE_EVENT = 'CREATE_EVENT'

export function eventCreate(event) {
  return {
    type: CREATE_EVENT,
    payload: event
  }
}

export function createEvent(newEventData) {
  return async function (dispatch) {
    try {
      console.log('NEW EVENT DATA', newEventData)
      const response = await axios
        .post(`${baseUrl}/events`, newEventData)

      console.log('RESPONSE DATA???', response)
      dispatch(eventCreate(response.data))

    } catch (error) {
      throw error
    }
  }
}
// Read all events
export const ALL_EVENTS = 'ALL_EVENTS'

export function allEvents(events) {
  return {
    type: ALL_EVENTS,
    payload: events
  }
}

export function getAllEvents() {
  return async function (dispatch) {
    try {

      const response = await axios
        .get(`${baseUrl}/events`)


      dispatch(allEvents(response))

    } catch (error) {
      throw error
    }
  }
}

// Read one event
export const ONE_EVENT = 'ONE_EVENT'

export function oneEvent(event) {
  return {
    type: ONE_EVENT,
    payload: event
  }
}

export function loadEvent(id) {
  return async function (dispatch) {
    try {

      const response = await axios
        .get(`${baseUrl}/events/${id}`)

      dispatch(oneEvent(response.data))

    } catch (error) {
      throw error
    }
  }
}