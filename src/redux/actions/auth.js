import authApi from "../../apis/authApi";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./type";

const loginRequest = () => ({
  type: LOGIN_REQUEST
})

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
})

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token
})

export const login = ({ username, password }) => {
  return async function (dispatch, getState) {
    if(!username || !password) {
      return dispatch(loginFailure("all fields is required"))
    }
    dispatch(loginRequest())
    try {
      const response = await authApi.post('https://fakestoreapi.com/auth/login', { username, password })
      dispatch(loginSuccess(response.data.token))
    }catch(err) {
      console.log("error")
      dispatch(loginFailure(err.message))
    }
  }
}