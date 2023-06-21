import axios from "axios";
import Swal from "sweetalert2";

const createNewAddressErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.status === 403) {
		return "Please Login First";
	}

	return "Something went wrong!";
};

export const createNewAddressHandler = async (input, navigate) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.post(`${process.env.REACT_APP_API_BASE_URL}/address/create`, input, config);

		Swal.fire({
			icon: "success",
			title: "New Address has been created",
			showConfirmButton: false,
			timer: 2000,
		});
		navigate("/account/manage-address");
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await createNewAddressErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};
