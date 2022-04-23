const axios = require("axios")

const url = "https://fakestoreapi.com/products"

const productsApi = axios.create({
  baseURL: url
})

export default productsApi
