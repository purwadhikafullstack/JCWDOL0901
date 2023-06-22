import axios from "axios";
import Swal from "sweetalert2";
import { setUserLocation } from "../../../redux/reducers/user/userAction";

const setAsDefaultErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.status === 403) {
		return "Please Login First";
	}

	return "Something went wrong!";
};

export const setAsDefaultHandler = async (navigate, address, dispatch) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/address/update/${address.id}/default`, null, config);

		Swal.fire({
			icon: "success",
			title: "Address has been set as default",
			showConfirmButton: false,
			timer: 2000,
		});
		navigate("/account/manage-address");
		dispatch(
			setUserLocation({
				latitude: Number(address.latitude),
				longitude: Number(address.longitude),
				granted: true,
				pending: false,
			}),
		);
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await setAsDefaultErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};
