import axios from "axios";

const server_link = "http://54.238.99.205/api";

export const gettickets = async () => {
  // return await axios.get(`${process.env.REACT_APP_BASE_URL}/gettickets`);
  return await axios.get(`${server_link}/gettickets`);
};

export const getticketSingle = async (id) => {
  // return await axios.get(`${process.env.REACT_APP_BASE_URL}/gettickets/${id}`);
  return await axios.get(`${server_link}/gettickets/${id}`);
};
export const getticketHistory = async (id) => {
  return await axios.get(
    // `${process.env.REACT_APP_BASE_URL}/gettickethistory/${id}`
    `${server_link}/gettickethistory/${id}`
  );
};
export const suggesttickets = async () => {
  // return await axios.get(`${process.env.REACT_APP_BASE_URL}/getticketapprove`);
  return await axios.get(`${server_link}/getticketapprove`);
};

export const updateticket = async (ticketid, message) => {
  return await axios.put(
    // `${process.env.REACT_APP_BASE_URL}/updatetickets/${ticketid}`,
    `${server_link}/updatetickets/${ticketid}`,
    {
      message,
    }
  );
};

export const ticketgenerate = async (part, quantity, id) => {
  // return await axios.post(`${process.env.REACT_APP_BASE_URL}/createtickets`, {
  return await axios.post(`${server_link}/createtickets`, {
    part_no: part,
    quantity: quantity,
    id: id,
  });
};
