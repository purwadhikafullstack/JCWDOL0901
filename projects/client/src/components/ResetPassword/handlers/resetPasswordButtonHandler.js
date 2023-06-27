import axios from "axios";
import Swal from "sweetalert2";

const resetPasswordErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.data === "Token expired") {
		return "Token expired. Please send verification email again!";
	} else if (error?.response?.data === "Token not valid") {
		return "Token not valid";
	}

	return "Something went wrong!";
};

export const resetPasswordButtonHandler = async (input, setError, navigate, token) => {
	try {
		await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/auth/user/password/reset/${token}`, input);
		Swal.fire({
			icon: "success",
			title: "Your password has been reset successfully",
			showConfirmButton: false,
			timer: 2000,
		});
		setTimeout(() => {
			navigate("/login");
		}, 2000);
	} catch (error) {
		await setError(await resetPasswordErrorHandler(error));
	}
};
