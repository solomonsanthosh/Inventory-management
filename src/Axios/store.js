import axios from "axios";
const server_link = "http://54.238.99.205/api";
export const getProducts = async (location) => {
  return await axios.get(`${server_link}/allproducts/${location}`);
};

export const postStore = async (product_id) => {
  return await axios.get(`${server_link}/postStore/${product_id}`);
};
