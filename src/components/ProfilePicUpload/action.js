
import axios from "axios";
import { PHOTO_UPLOAD_API } from "../../constants/api";

export const PHOTO_UPLOAD = 'PHOTO_UPLOAD';
export const uploadPhoto = (userId, photoData) => function (dispatch) {

    const axiosConfig= {method: 'put', url: PHOTO_UPLOAD_API};

    axios(axiosConfig)
    .then((response) => {
        dispatch({
            type:PHOTO_UPLOAD,
            payload: response.data
        })
    })
    .catch((error) => console.log(error));
}