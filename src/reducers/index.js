import { combineReducers } from 'redux';
import events from './events/events';
import event from './events/event';
import users from './users/users'

export default combineReducers({
  events,
  event,
  users
})