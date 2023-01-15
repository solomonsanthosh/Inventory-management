import axios from "axios";

export const createAccountAxios = async (user) => {
	return await axios.post(`${process.env.REACT_APP_BASE_URL}/create`, {
		user: user,
	});
};

export const getAccounts = async () => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/show`);
};


export const getSuggestion = async (partno) => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/getsuggestions/${partno}`);
};
