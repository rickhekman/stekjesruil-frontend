import axios from 'axios'

const baseUrl = 'http://localhost:4000'

// Create an event



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