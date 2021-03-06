 function reducer(state = { userCreated: false, token: null }, action = {}) {
  switch (action.type) {
    case 'CREATE_USER':
      return { ...state, userCreated: true }
    case 'LOGIN_USER':
      return { ...state, token: action.payload.data.token }
    default:
      return state
  }
}

export default reducer
