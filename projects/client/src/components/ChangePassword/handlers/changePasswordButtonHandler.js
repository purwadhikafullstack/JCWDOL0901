import axios from "axios";
import Swal from "sweetalert2";

const validateChangePasswordInput = (input) => {
	if (input.password !== input.confirm_password) throw { code: "CONFIRM_PASS_ERR" };

	const { old_password, password } = input;

	return { old_password, password };
};

const ChangePasswordErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.code === "CONFIRM_PASS_ERR") {
		return "Confirm password not equal!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const changePasswordButtonHandler = async (input, setError, navigate) => {
	try {
		const validatedInput = await validateChangePasswordInput(input);
		await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/auth/user/password/update`, validatedInput, {
			headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
		});
		Swal.fire({
			icon: "success",
			title: "Your password has been updated",
			showConfirmButton: false,
			timer: 2000,
		});
		setTimeout(() => {
			navigate(-1);
		}, 2000);
	} catch (error) {
		console.log(error);
		await setError(await ChangePasswordErrorHandler(error));
	}
};
