import axios from "axios";
import Swal from "sweetalert2";

// const validatePasswordInput = input => {
// 	if (input.password !== input.confirm_password) throw { code: "CONFIRM_PASS_ERR" };

// 	const { old_password, password } = input;

// 	return { old_password, password };
// };

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
		console.log("data email result: ", data.email);
		console.log("user email result: ", user.email);
		console.log("response email result: ", response.data.user.email);
		// console.log("email data changed isTrue: ", data.email !== user.email);
		// console.log("email response changed isTrue: ", response.data.user.email !== user.email);
		console.log("==========================");

		if (data.email !== user.email) {
		
			Swal.fire({
				title: "Submit your password",
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
						// return response.data;
					} catch (error) {
						const errorMessage = error.response ? error.response.data : `Request failed: ${error.message}`;
						Swal.showValidationMessage(errorMessage);
						console.log("error swal: ", error);
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
