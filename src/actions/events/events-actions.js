import axios from '../../axios'

export const CREATE_EVENT = 'CREATE_EVENT'
export const LOAD_ALL_EVENTS = 'LOAD_ALL_EVENTS'
export const EVENT_DETAILS = 'EVENT_DETAILS'
export const DELETE_EVENT = 'DELETE_EVENT'

export function eventCreate(event) {
  return {
    type: CREATE_EVENT,
    event
  }
}

export function loadAllEvents(events) {
  return {
    type: LOAD_ALL_EVENTS,
    events
  }
}

export function eventDetails(event) {
  return {
    type: EVENT_DETAILS,
    event
  }
}

export function deleteEventSucces(event) {
  return {
    type: DELETE_EVENT,
    event
  }
}

export function createEvent(newEventData) {
  return async function (dispatch, getState) {
    try {

      const state = getState()
      const token = state.users.token

      const response = await axios
        .post(`/events`,
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

export function getAllEvents() {
  return async function (dispatch) {
    try {

      const response = await axios
        .get(`/events`)

      const { data } = response
      const action = loadAllEvents(data)
      dispatch(action)

    } catch (error) {
      throw error
    }
  }
}

export function loadEvent(id) {
  return async function (dispatch) {
    try {

      const response = await axios
        .get(`/events/${id}`)

      dispatch(eventDetails(response.data))

    } catch (error) {
      throw error
    }
  }
}

export function deleteEvent(id) {
  return async function (dispatch) {
    try {

      const response = await axios
        .delete(`/events/${id}`, id)

      dispatch(deleteEventSucces(response.id))

    } catch (error) {
      throw error
    }
  }
}
