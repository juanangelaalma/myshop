import axios from "axios";

const getProductsRequest = () => ({
  type: "GET_PRODUCTS_REQUEST",
});

const getProductsSuccess = (products) => ({
  type: "GET_PRODUCTS_SUCCESS",
  payload: products,
});

const getProductsFailure = (error) => ({
  type: "GET_PRODUCTS_FAILURE",
  payload: error,
});

const url = "https://fakestoreapi.com/products";


export const fetchProducts = () => {
  return async function (dispatch, getState) {
    dispatch(getProductsRequest())
    try {
      const response = await axios.get(url)
      dispatch(getProductsSuccess(response.data))
    }catch(error) {
      dispatch(getProductsFailure(error.message))
    }
  }
}

export const fetchProductsLimit = () => {
  return async function (dispatch, getState) {
    dispatch(getProductsRequest())
    try {
      const response = await axios.get(`${url}?limit=8`)
      dispatch(getProductsSuccess(response.data))
    }catch(err) {
      dispatch(getProductsFailure(err.message))
    }
  }
}