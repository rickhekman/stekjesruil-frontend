function reducer(state = { eventCreated: false }, action = {}) {
  switch (action.type) {
    case 'ALL_EVENTS':
      return action.payload
    case 'CREATE_EVENT':
      return { ...state, eventCreated: true }
    case 'DELETE_EVENT':
      return state.eventsList.filter(event => event.id !== action.payload)
    default:
      return state
  }
}

export default reducer
