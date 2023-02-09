import axios from "axios";

export const getProducts = async (location) => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}/allproducts/${location}`
  );
};

export const postStore = async (product_id) => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}/postStore/${product_id}`
  );
};
