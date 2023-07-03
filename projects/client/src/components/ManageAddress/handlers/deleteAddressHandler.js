import axios from "axios";
import Swal from "sweetalert2";

const deleteAddressErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.status === 403) {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const deleteAddressHandler = async (id) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/address/delete/${id}`, config);

		Swal.fire({
			icon: "success",
			title: "Address has been deleted",
			showConfirmButton: false,
			timer: 2000,
		});
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await deleteAddressErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};
