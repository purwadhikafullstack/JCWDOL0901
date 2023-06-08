import axios from "axios";
import Swal from "sweetalert2";

const validateCreateBranchAdminInput = input => {
	if (input.password !== input.confirm_password)
		throw { code: "CONFIRM_PASS_ERR" };

	const { email, name, password, city_id } = input;

	return { email, name, password, city_id };
};

const createBranchAdminErrorHandler = async error => {
	console.log(error);
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.code === "CONFIRM_PASS_ERR") {
		return "Confirm password not equal!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.status === 403) {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const createBranchAdminHandler = async input => {
	try {
		const validatedInput = await validateCreateBranchAdminInput(input);
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.post(
			`${process.env.REACT_APP_API_BASE_URL}/auth/admin/register`,
			validatedInput,
			config
		);

		Swal.fire({
			icon: "success",
			title: "New branch admin account has been created",
			showConfirmButton: false,
			timer: 2000,
		});
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await createBranchAdminErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};
