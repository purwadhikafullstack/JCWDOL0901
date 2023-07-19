import axios from "axios";
import { setAdminLogin } from "../../../redux/reducers/admin/adminAction";
import { storeAdminToken } from "../../../utils/jsCookie";
import { setUserLogin } from "../../../redux/reducers/user/userAction";

const loginAdminErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.code === "CONFIRM_PASS_ERR") {
		return "Confirm password not equal!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const adminLoginButtonHandler = async (input, setError, navigate, dispatch) => {
	await axios
		.post(`${process.env.REACT_APP_API_BASE_URL}/auth/admin/login`, input)
		.then(async (result) => {
			localStorage.setItem("token", result.data.token);
			storeAdminToken(result.data.token);

			await navigate("/admin/dashboard");
			dispatch(setAdminLogin({ hasLogged: true, superAdmin: result.data.superAdmin }));
			dispatch(setUserLogin({ hasLogged: false, avatar: "", username: "" }));
		})
		.catch(async (error) => {
			await setError(await loginAdminErrorHandler(error));
		});
};
