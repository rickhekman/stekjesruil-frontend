function reducer(state = null, action) {
  switch (action.type) {
    case 'ONE_EVENT':
      return action.payload
    default:
      return state
  }
}

export default reducer