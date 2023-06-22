import axios from "axios";
import Swal from "sweetalert2";

const editAddressErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.status === 403) {
		return "Please Login First";
	}

	return "Something went wrong!";
};

export const editAddressHandler = async (input, navigate, address) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/address/update/${address.id}`, input, config);

		Swal.fire({
			icon: "success",
			title: "Address has been updated",
			showConfirmButton: false,
			timer: 2000,
		});
		navigate("/account/manage-address");
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await editAddressErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};
