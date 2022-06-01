const axios = require("axios")

const url = "https://fakestoreapi.com/auth"

const authApi = axios.create({
  baseUrl: url
})

export default authApi