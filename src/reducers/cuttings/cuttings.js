function reducer(state = { cuttingCreated: false }, action = {}) {
  switch (action.type) {
    case 'ALL_CUTTINGS':
      console.log('ALL_CUTTINGS REDUCER', action.payload)
      return action.payload
    default:
      return state
  }
}

export default reducer