import axios from "axios";

export const getProducts = async () => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/allproducts/`);
};

export const postStore = async (product_id) => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/postStore/${product_id}`);
};
