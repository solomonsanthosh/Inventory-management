import axios from "axios";

export const createAccountAxios = async (user) => {
  console.log("user", user);
  return await axios.post(`http://localhost:8080/create`, {
    user: user,
  });
};

export const getAccounts = async () => {
  return await axios.get(`${process.env.REACT_APP_BASE_URL}/show`);
};

export const getSuggestion = async (partno) => {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}/getsuggestions/${partno}`
  );
};

export const sendEmail = async (id, product, quantity) => {
  return await axios.post(`${process.env.REACT_APP_BASE_URL}/sendemail`, {
    company_id: id,
    product: product,
    quantity: quantity,
  });
};
