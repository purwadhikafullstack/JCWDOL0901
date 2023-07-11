import axios from "axios";
import Swal from "sweetalert2";

const userAccountSettingErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.code === "CONFIRM_PASS_ERR") {
		return "Confirm password not equal!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const userAccountSettingHandler = async (data, setError, user) => {
	try {
		const token = localStorage.getItem("token");

		const response = await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/profile/update`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});

		if (data.email !== user.email) {
			Swal.fire({
				title: "Submit your password",
				text: "Changing email require password confirmation!",
				input: "password",
				inputAttributes: {
					autocapitalize: "off",
				},
				showCancelButton: true,
				confirmButtonText: "Submit",
				showLoaderOnConfirm: true,
				preConfirm: async (password) => {
					try {
						const token = localStorage.getItem("token");
						const response = await axios.post(
							`${process.env.REACT_APP_API_BASE_URL}/auth/user/verify/password`,
							{ password },
							{
								headers: { Authorization: `Bearer ${token}` },
							},
						);
						if (!response.data) {
							throw new Error("Invalid response");
						}
					} catch (error) {
						const errorMessage = error.response ? error.response.data : `Request failed: ${error.message}`;
						Swal.showValidationMessage(errorMessage);
					}
				},
				allowOutsideClick: () => !Swal.isLoading(),
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire({
						icon: "success",
						title: "Updates Saved",
						showConfirmButton: false,
						timer: 2000,
					});
					user.email = data.email;
				} else if (result.dismiss === Swal.DismissReason.cancel) {
					Swal.fire({
						icon: "error",
						title: "Updates Cancelled",
						showConfirmButton: false,
						timer: 1000,
					});
				}
			});
		} else {
			Swal.fire({
				icon: "success",
				title: "Updates Saved",
				showConfirmButton: false,
				timer: 2000,
			});
		}
		if (data.email === user.email) {
			return response.data;
		}
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await setError(await userAccountSettingErrorHandler(error)),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};
