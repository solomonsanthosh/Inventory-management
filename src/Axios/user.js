import  axios from 'axios';

export const login = async (user) => {

    return(
        await axios.post(`${process.env.REACT_APP_BASE_URL}/login`,{
            user:user
        })
    )
}