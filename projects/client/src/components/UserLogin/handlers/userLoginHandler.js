import axios from "axios";
import { storeAdminToken } from "../../../utils/jsCookie";

const userLoginErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.code === "CONFIRM_PASS_ERR") {
		return "Confirm password not equal!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const userLoginButtonHandler = async (input, setError, navigate) => {
	try {
		const { user, password } = input;
		const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/user/login`, {
			user,
			password,
		});
		localStorage.setItem("token", response.data.token);
		storeAdminToken(response.data.token);
		navigate("/");
	} catch (error) {
		await setError(await userLoginErrorHandler(error));
	}
};
