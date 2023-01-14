import axios from "axios";


export const gettickets = async () => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/gettickets`);
};
export const getticketSingle = async (id) => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/gettickets/${id}`);
};
export const suggesttickets = async () => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/getticketapprove`);
};

export const ticketgenerate = async (part,quantity,name) => {
	return await axios.post(`${process.env.REACT_APP_BASE_URL}/createtickets`,{
		part_no:part,
		quantity:quantity,
		name:name
	})
};
