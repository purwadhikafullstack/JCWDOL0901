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

		// console.log("data result: ", data);
		// console.log("data result: ", data.email);
		// console.log("user result: ", user.email);
		// console.log("response result: ", response.data.user.email);
		// console.log("email data changed isTrue: ", data.email !== user.email);
		// console.log("email response changed isTrue: ", response.data.user.email !== user.email);

		if (data.email !== user.email) {
			Swal.fire({
				title: "Changing email require password confirmation",
				input: "password",
				inputAttributes: {
					autocapitalize: "off",
				},
				showCancelButton: true,
				confirmButtonText: "Confirm password",
				showLoaderOnConfirm: true,
				preConfirm: async (password) => {
					try {
						const token = localStorage.getItem("token");
						await axios.post(
							`${process.env.REACT_APP_API_BASE_URL}/auth/user/verify/password`,
							{ password },
							{
								headers: { Authorization: `Bearer ${token}` },
							},
						);
					} catch (error) {
						Swal.showValidationMessage(`Request failed: ${error}`);
					}
				},
				allowOutsideClick: () => !Swal.isLoading(),
			})
				.then((result) => {
					console.log("result: ", result);
					if (result.isConfirmed) {
						Swal.fire({
							icon: "success",
							title: "Updates Saved",
							showConfirmButton: false,
							timer: 2000,
						});
					}
				})
		} else {
			Swal.fire({
				icon: "success",
				title: "Updates Saved",
				showConfirmButton: false,
				timer: 2000,
			});
		}

		// 	Swal.fire({
		// 		title: "Changing email require password confirmation",
		// 		input: "text",
		// 		inputAttributes: {
		// 			autocapitalize: "off",
		// 		},
		// 		showCancelButton: true,
		// 		confirmButtonText: "Confirm password",
		// 		showLoaderOnConfirm: true,
		// 		preConfirm: (login) => {
		// 			return fetch(`//api.github.com/users/${login}`)
		// 				.then((response) => {
		// 					if (!response.ok) {
		// 						throw new Error(response.statusText);
		// 					}
		// 					return response.json();
		// 				})
		// 				.catch((error) => {
		// 					Swal.showValidationMessage(`Request failed: ${error}`);
		// 				});
		// 		},
		// 		allowOutsideClick: () => !Swal.isLoading(),
		// 	}).then((result) => {
		// 		if (result.isConfirmed) {
		// 			Swal.fire({
		// 				icon: "success",
		// 				title: "Updates Saved",
		// 				showConfirmButton: false,
		// 				timer: 2000,
		// 			});
		// 		}
		// 	});
		// 	return response.data;
		// } catch (error) {
		// 	Swal.fire({
		// 		icon: "error",
		// 		title: await setError(await userAccountSettingErrorHandler(error)),
		// 		showConfirmButton: false,
		// 		timer: 2000,
		// 	});
		// }

		// console.log("email result: ", response.data.user.email);
		// console.log("password result: ", response.data.user.password);
		// Swal.fire({
		// 	icon: "success",
		// 	title: "Updates Saved",
		// 	showConfirmButton: false,
		// 	timer: 2000,
		// });

		return response.data;
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await setError(await userAccountSettingErrorHandler(error)),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};
