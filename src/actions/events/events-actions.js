import axios from 'axios'
const baseUrl = 'http://localhost:4000'

export const CREATE_EVENT = 'CREATE_EVENT'
export const ALL_EVENTS = 'ALL_EVENTS'
export const ONE_EVENT = 'ONE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'

// Create an event
export function eventCreate(event) {
  return {
    type: CREATE_EVENT,
    payload: event
  }
}

export function createEvent(newEventData) {
  return async function (dispatch, getState) {
    try {

      const state = getState()
      const token = state.users.token

      const response = await axios
        .post(`${baseUrl}/events`,
          { newEventData },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

      dispatch(eventCreate(response.data))

    } catch (error) {
      throw error
    }
  }
}

// Read all events
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

      const { data } = response
      const action = allEvents(data)
      dispatch(action)

    } catch (error) {
      throw error
    }
  }
}

// Read one event
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

// Delete an event
export function deleteEventSucces(event) {
  return {
    type: DELETE_EVENT,
    payload: event
  }
}

export function deleteEvent(id) {
  return async function (dispatch) {
    try {

      const response = await axios
        .delete(`${baseUrl}/events/${id}`, id)
      // console.log('Delete response', response)
      dispatch(deleteEventSucces(response.id))

    } catch (error) {
      throw error
    }
  }
}
