import axios from "axios";

const server_link = "http://54.238.99.205/api";

export const login = async (user) => {
  return (
    // await axios.post(`${process.env.REACT_APP_BASE_URL}/login`,{
    await axios.post(`${server_link}/login`, {
      user: user,
    })
  );
};

export const checkLogin = async (accessToken) => {
  return (
    // await axios.get(`${process.env.REACT_APP_BASE_URL}/check`,{
    await axios.get(`${server_link}/check`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Access-Control-Allow-Origin":
          "https://inventory-managenment-6b76e.web.app",
      },
    })
  );
};
