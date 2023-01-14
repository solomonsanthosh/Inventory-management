import  axios from 'axios';

export const login = async (user) => {

    return(
        await axios.post(`${process.env.REACT_APP_BASE_URL}/login`,{
            user:user
        })
    )
}

export const checkLogin = async (accessToken) => {

    return(
        await axios.get(`${process.env.REACT_APP_BASE_URL}/check`,{
            withCredentials:true,
            headers: {Authorization: `Bearer ${accessToken}`,'Access-Control-Allow-Origin': 'http://localhost:3000'}
            
        })
    )
}