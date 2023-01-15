import axios from "axios";

export const gettickets = async () => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/gettickets`);
};

export const getticketSingle = async (id) => {
	return await axios.get(
		`${process.env.REACT_APP_BASE_URL}/gettickets/${id}`
	);
};

export const suggesttickets = async () => {
	return await axios.get(
		`${process.env.REACT_APP_BASE_URL}/getticketapprove`
	);
};

export const updateticket = async (ticketid, message) => {
	return await axios.put(
		`${process.env.REACT_APP_BASE_URL}/updatetickets/${ticketid}`,
		{message}
	);
};

export const ticketgenerate = async (part, quantity, name) => {
	return await axios.post(`${process.env.REACT_APP_BASE_URL}/createtickets`, {
		part_no: part,
		quantity: quantity,
		name: name,
	});
};
