function reducer(state = { cuttingCreated: false }, action = {}) {
  switch (action.type) {
    case 'ALL_CUTTINGS':
      return action.payload
    case 'CREATE_CUTTING':
      return { ...state, cuttingCreated: true }
    case 'DELETE_CUTTING':
      return state.cuttingsList.filter(cutting => cutting.id !== action.payload)
    default:
      return state
  }
}

export default reducer
