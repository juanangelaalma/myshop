import axios from "axios";

const url = "https://fakestoreapi.com/products";

export const fetchProductsService = () => {
  return axios.get(url);
};
