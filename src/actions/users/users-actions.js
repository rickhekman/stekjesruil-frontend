import axios from 'axios';

const baseUrl = 'http://localhost:4000';

// User signup
export const CREATE_USER = 'CREATE_USER';

function userSignUp() {
  return {
    type: CREATE_USER
  }
}

export function signUp(username, email, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${baseUrl}/signup`, {
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
export const LOGIN_USER = 'LOGIN_USER'

function loginUser(data) {
  return {
    type: LOGIN_USER,
    payload: { data: data }
  }
}

export function login(email, password) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${baseUrl}/login`, {
        email: email,
        password: password
      })
      dispatch(loginUser(response.data))

    } catch (error) {
      throw error
    }
  }
}