import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actions/type'

const token = JSON.parse(localStorage.getItem("token"))

const initialState = {
  token: token ? token : "",
  error: null,
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, token: "", error: null, loading: true }
    case LOGIN_FAILURE:
      return { ...state, token: "", error: action.payload, loading: false }
    case LOGIN_SUCCESS:
      return { ...state, token: action.payload, error: null, loading: false }
    default:
      return state
  }
}