import axios from "axios";
import Swal from "sweetalert2";

const resetPasswordErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const resetPasswordButtonHandler = async (input, setError, navigate) => {
	try {
		await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/auth/user/password/update`, input, {
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
		await setError(await resetPasswordErrorHandler(error));
	}
};
