import axios from "axios";

const loginAdminErrorHandler = async error => {
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
		.then(async result => {
			localStorage.setItem("token", result.data.token);
			await navigate("/admin/dashboard");
		})
		.catch(async error => {
			await setError(await loginAdminErrorHandler(error));
		});
};
