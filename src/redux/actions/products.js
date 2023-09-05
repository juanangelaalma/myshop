import productsApi from "../../apis/productsApi";
import products from "../../data/products";
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./type";

const getProductsRequest = () => ({
  type: GET_PRODUCTS_REQUEST,
});

const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  payload: error,
});

const getLocalProducts = async () => {
  return products;
}

export const fetchProducts = () => {
  return async function (dispatch) {
    dispatch(getProductsRequest())
    try {
      const response = await getLocalProducts()
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
      const response = await productsApi.get("?limit=8")
      dispatch(getProductsSuccess(response.data))
    }catch(err) {
      dispatch(getProductsFailure(err.message))
    }
  }
}

export const fetchProductByCategory = (category) => {
  return async function(dispatch) {
    dispatch(getProductsRequest())
    try {
      const response = await productsApi.get(`/category/${category}`)
      dispatch(getProductsSuccess(response.data))
    }catch(err) {
      dispatch(getProductsFailure(err.message))
    }
  }
}