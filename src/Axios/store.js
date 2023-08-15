import axios from "axios";
const server_link = "https://inventory-server-3jgi.onrender.com/api";
export const getProducts = async (location) => {
  return await axios.get(`${server_link}/allproducts/${location}`);
};

export const postStore = async (product_id) => {
  return await axios.get(`${server_link}/postStore/${product_id}`);
};
