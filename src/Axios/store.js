import axios from "axios";

const server_link = "https://inventory-server-3jgi.onrender.com";

export const getProducts = async () => {
	// return await axios.get(`${process.env.REACT_APP_BASE_URL}/allproducts/`);
	return await axios.get(`${server_link}/allproducts/`);
};

export const postStore = async (product_id) => {
	// return await axios.get(`${process.env.REACT_APP_BASE_URL}/postStore/${product_id}`);
	return await axios.get(`${server_link}/postStore/${product_id}`);
};
