import axios from "axios";
const server_link = "https://inventory-server-3jgi.onrender.com";

export const createAccountAxios = async (user) => {
	console.log("user", user);
	return await axios.post(`${server_link}/create`, {
		user: user,
	});
};

export const getAccounts = async () => {
	// return await axios.get(`${process.env.REACT_APP_BASE_URL}/show`);
	return await axios.get(`${server_link}/show`);
};

export const updateAccount = async (user) => {
	// return await axios.put(`${process.env.REACT_APP_BASE_URL}/update`, {
	return await axios.put(`${server_link}/update`, {
		user: user,
	});
};

export const deleteAccount = async (id) => {
	// return await axios.delete(`${process.env.REACT_APP_BASE_URL}/delete/${id}`);
	return await axios.delete(`${server_link}/delete/${id}`);
};

export const getSuggestion = async (partno) => {
	return await axios.get(
		// `${process.env.REACT_APP_BASE_URL}/getsuggestions/${partno}`
		`${server_link}/getsuggestions/${partno}`
	);
};

export const sendEmail = async (id, product, quantity) => {
	// return await axios.post(`${process.env.REACT_APP_BASE_URL}/sendemail`, {
	return await axios.post(`${server_link}/sendemail`, {
		company_id: id,
		product: product,
		quantity: quantity,
	});
};
