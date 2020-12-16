import { LOAD_ALL_EVENTS, CREATE_EVENT, DELETE_EVENT } from "../../actions/events/events-actions";

function reducer(state = { eventCreated: false }, action = {}) {
  switch (action.type) {
    case LOAD_ALL_EVENTS:
      return action.events
    case CREATE_EVENT:
      return { ...state, eventCreated: true }
    case DELETE_EVENT:
      return state.eventsList.filter(event => event.id !== action.event)
    default:
      return state
  }
}

export default reducer
