import axios from "axios";
import Swal from "sweetalert2";

const updateAvatarErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.status === 403) {
		return error?.response?.data;
	} else if (error?.response?.data?.code === "LIMIT_FILE_SIZE") {
		return error?.response?.data?.message;
	} else if (error?.response?.data === "File type not allowed") {
		return error?.response?.data;
	} else if (error?.response?.data === "ER_ROW_IS_REFERENCED_2") {
		return "Cannot delete, there are still products under this category";
	}

	return "Something went wrong!";
};

export const updateAvatarHandler = async (data) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/profile/avatar/update`, data, config);
		console.log("data FE handler: ", data);
		console.log("config FE handler: ", config);

		Swal.fire({
			icon: "success",
			title: "Avatar has been updated",
			showConfirmButton: false,
			timer: 2000,
		});
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: "failed to update avatar",
			showConfirmButton: false,
			timer: 2000,
		});
	}
};

export const getAvatar = () => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/profile/avatar`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};
