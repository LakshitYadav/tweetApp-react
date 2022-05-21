import axios from "axios";


export const REGISTER_USER = 'REGISTER_USER';

import { REGISTER_USER_API } from "../../constants/api";

export const registerUser = (userData) => function(dispatch) {

    axiosConfig={
        data: userData,
        method: 'post',
        url:REGISTER_USER_API
    }

    axios(axiosConfig)
    .then((response) => {
        dispatch({
            payload:response.data,
            type:REGISTER_USER,
        })
    })
    .catch((error) => console.log(error));
}
