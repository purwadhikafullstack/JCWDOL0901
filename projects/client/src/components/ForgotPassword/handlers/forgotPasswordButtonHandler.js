import axios from "axios";
import Swal from "sweetalert2";

const forgotPasswordErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.status === 404) {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const forgotPasswordButtonHandler = async (input, setError, navigate) => {
	try {
		await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/user/password/request`, input);
		Swal.fire({
			icon: "success",
			title: "Verification email has been sent to your email!",
			showConfirmButton: false,
			timer: 2000,
		});
		setTimeout(() => {
			navigate(-1);
		}, 2000);
	} catch (error) {
		await setError(await forgotPasswordErrorHandler(error));
	}
};
