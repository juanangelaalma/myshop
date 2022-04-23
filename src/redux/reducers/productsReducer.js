import { SET_PRODUCTS } from "../actions/type"

const initialState = {
  products: [],
  loading: false,
  error: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {...state, loading: true, error: null}
    case "GET_PRODUCTS_SUCCESS":
      return { ...state, loading: false, products: action.payload, error: null }
    case "GET_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}