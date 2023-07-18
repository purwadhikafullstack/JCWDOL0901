import axios from "axios";
import { storeAdminToken } from "../../../utils/jsCookie";
import { setUserLogin } from "../../../redux/reducers/user/userAction";
import { clearCheckout } from "../../../redux/reducers/checkout/checkoutAction";

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

const isUserLogged = async (navigate, dispatch) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const userData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/user/logged`, config);
		if (!userData) {
			navigate(`/login`, {
				state: {
					authGuard: true,
				},
			});
		}
		dispatch(setUserLogin({ hasLogged: true, avatar: userData.data.avatar, username: userData.data.username }));
		dispatch(clearCheckout());
		return;
	} catch (error) {
		dispatch(setUserLogin({ hasLogged: false, avatar: "", username: "" }));
		navigate(`/login`, {
			state: {
				authGuard: true,
			},
		});
	}
};

export const userLoginButtonHandler = async (input, setError, navigate, dispatch) => {
	try {
		const { user, password } = input;
		const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/user/login`, {
			user,
			password,
		});
		localStorage.setItem("token", response.data.token);
		storeAdminToken(response.data.token);

		navigate("/");
		isUserLogged(navigate, dispatch);
	} catch (error) {
		await setError(await userLoginErrorHandler(error));
	}
};
