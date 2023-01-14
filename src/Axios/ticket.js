import axios from "axios";


export const gettickets = async () => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/gettickets`);
};
export const suggesttickets = async () => {
	return await axios.get(`${process.env.REACT_APP_BASE_URL}/getticketapprove`);
};
