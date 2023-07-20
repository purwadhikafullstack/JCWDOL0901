import { clearUser } from '../redux/reducers/user/userAction.js';

export const showAlertByError = (error, dispatch) => {
    if(error.response?.data?.message === "invalid token" && error.response.status === 400) {
        dispatch(clearUser());
        alert("Token Invalid! Possibly User Modification.")
    } else if (error.response?.data?.message === "token expired" && error.response.status === 401) {
        dispatch(clearUser());
        alert("Expired Token, Please Relogin.");
    } else if (error.response.status === 403) {
        alert ("Forbidden! Access Denied.");
    } else {
        alert(error)
    }
    
};