import { clearUserSession } from '../redux/reducers/user/userAction.js';

export const showAlertByError = (error, dispatch) => {
    if(error.response?.data?.message === "invalid token" && error.response.status === 400) {
        dispatch(clearUserSession());
        return alert("Token Invalid! Possibly User Modification.")
    } else if (error.response.status === 401) {
        if(error.response?.data?.message === "jwt malformed") {
            dispatch(clearUserSession());
            return alert ("Token Malformed!");
        } else if (error.response?.data?.message === "token expired") {
            dispatch(clearUserSession());
            return alert("Expired Token, Please Relogin.");
        }
    } else if (error.response.status === 403) {
        if(error.response?.data?.message === "missing token") {
            dispatch(clearUserSession());
            return alert ("Token Missing!");
        };
        return alert ("Forbidden! Access Denied.");
    };

    return alert(error);    
};