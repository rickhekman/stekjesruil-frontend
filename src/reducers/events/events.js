function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'ALL_EVENTS':
      return action.payload
    case 'CREATE_EVENT':
      return action.payload
    case 'DELETE_EVENT':
      // console.log('DELETE_EVENT action event id', action.payload)
      // console.log('Delete state', state)
      // console.log('Delete state events', state.data)
      // return action.payload
      return state.eventslist.filter(event => event.id !== action.payload)
    default:
      return state
  }
}

export default reducer