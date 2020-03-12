function reducer(state = null, action) {
  switch (action.type) {
    case 'ONE_CUTTING':
      return action.payload
    default:
      return state
  }
}

export default reducer