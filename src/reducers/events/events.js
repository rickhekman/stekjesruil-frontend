function reducer(state = {}, action) {
  switch (action.type) {
    case 'ALL_EVENTS':
      return action.payload
    default:
      return state
  }
}

export default reducer