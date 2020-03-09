import { combineReducers } from 'redux'
import events from './events/events'
import event from './events/event'

export default combineReducers({
  events,
  event
})