import { EVENT_DETAILS } from "../../actions/events/events-actions";

function reducer(state = null, action) {
  switch (action.type) {
    case EVENT_DETAILS:
      return action.event
    default:
      return state
  }
}

export default reducer
