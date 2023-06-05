import axios from "axios";

const validateRegistrationInput = input => {
	if (input.password !== input.confirm_password)
		throw { code: "CONFIRM_PASS_ERR" };

	const { email, username, phone, name, password, reference } = input;

	return { email, username, phone, name, password, reference };
};

const registerUserErrorHandler = async error => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.code === "CONFIRM_PASS_ERR") {
		return "Confirm password not equal!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	};

	return "Something went wrong!";
};

export const registerButtonHandler = async (input, setError, setBusy, navigate) => {
	try {
		await setBusy(true);
		const validatedInput = await validateRegistrationInput(input);
		await axios.post(
			`${process.env.REACT_APP_API_BASE_URL}/auth/user/register`,
			validatedInput
		);
		navigate("/register/greeting", {
			state: { fromRegister: true, email: validatedInput.email },
		});
	} catch (error) {
		await setBusy(false);
		await setError(await registerUserErrorHandler(error));
	}
};
