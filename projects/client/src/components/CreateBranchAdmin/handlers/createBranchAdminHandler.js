import axios from "axios";

const validateCreateBranchAdminInput = input => {
	if (input.password !== input.confirm_password)
		throw { code: "CONFIRM_PASS_ERR" };

	const { email, name, password, city_id } = input;

	return { email, name, password, city_id };
};

const createBranchAdminErrorHandler = async error => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.code === "CONFIRM_PASS_ERR") {
		return "Confirm password not equal!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const createBranchAdminHandler = async (
	input,
	setError,
	setBusy,
	navigate
) => {
	try {
		await setBusy(true);
		const validatedInput = await validateCreateBranchAdminInput(input);
		// const token = localStorage.getItem("token");
		const token = "test";
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.post(
			`${process.env.REACT_APP_API_BASE_URL}/auth/admin/register`,
			validatedInput,
			config
		);
		navigate("/admin/dashboard", {
			state: { fromRegister: true, email: validatedInput.email },
		});
	} catch (error) {
		await setBusy(false);
		await setError(await createBranchAdminErrorHandler(error));
	}
};
