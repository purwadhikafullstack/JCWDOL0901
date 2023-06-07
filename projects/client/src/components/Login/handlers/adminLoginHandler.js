import axios from "axios";

const validateAdminLoginInput = input => {
	if (input.password !== input.confirm_password)
		throw { code: "CONFIRM_PASS_ERR" };

	const { email, password} = input;

	return { email, password};
};

const loginAdminErrorHandler = async error => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.code === "CONFIRM_PASS_ERR") {
		return "Confirm password not equal!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	};

	return "Something went wrong!";
};

export const adminLoginButtonHandler = async (input, setError, setBusy, navigate) => {
	try {
		await setBusy(true);
		const validatedInput = await validateAdminLoginInput(input);
		await axios.post(
			`${process.env.REACT_APP_API_BASE_URL}/auth/admin/login`,
			validatedInput
		);
		navigate("/admin/login/dashboard", {
			state: { fromAdminLogin: true, email: validatedInput.email },
		});
	} catch (error) {
		await setBusy(false);
		await setError(await loginAdminErrorHandler(error));
	}
};
