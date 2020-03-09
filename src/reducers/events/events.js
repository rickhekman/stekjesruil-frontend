function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'ALL_EVENTS':
      return action.payload
    case 'CREATE_EVENT':
      console.log(`'CREATE_EVENT' ACTION is CREATE NEW EVENT DATA`, action.payload)
      return action.payload
    default:
      return state
  }
}

export default reducer