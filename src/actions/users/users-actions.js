import axios from '../../axios'

export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';

// User signup
function userSignUp() {
  return {
    type: CREATE_USER
  }
}

export function signUp(username, email, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/signup`, {
        username: username,
        email: email,
        password: password,
      })
      if (response.status === 201) {
        dispatch(userSignUp())
      }
    } catch (error) {
      throw error
    }
  }
}

// User login
function loginUser(data) {
  return {
    type: LOGIN_USER,
    payload: { data: data }
  }
}

export function login(email, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/login`, {
        email: email,
        password: password
      })
      dispatch(loginUser(response.data))

    } catch (error) {
      throw error
    }
  }
}
