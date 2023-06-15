import Cookies from "js-cookie";

const userSession = 60;
const adminSession = 480;

export const storeUserToken = token => {
	const expiry = new Date(new Date.getTime() + userSession * 60 * 1000);

	return Cookies.set("token", token, { expires: expiry });
};

export const storeAdminToken = token => {
	const expiry = new Date(new Date.getTime() + adminSession * 60 * 1000);

	return Cookies.set("token", token, { expires: expiry });
};

export const getToken = () => Cookies.get("token");
