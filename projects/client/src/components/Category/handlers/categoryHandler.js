import axios from "axios";
import Swal from "sweetalert2";

const validateCategoryInput = values => {
	const formData = new FormData();
	for (let value in values) {
		formData.append(value, values[value]);
	}
	return formData;
};

const categoryErrorHandler = async error => {
	console.log(error.response.data);
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
	}

	return "Something went wrong!";
};

export const categoryHandler = async input => {
	try {
		const validatedInput = await validateCategoryInput(input);
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.post(
			`${process.env.REACT_APP_API_BASE_URL}/category/create`,
			validatedInput,
			config
		);

		Swal.fire({
			icon: "success",
			title: "New category has been created",
			showConfirmButton: false,
			timer: 2000,
		});
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await categoryErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};

export const generateUrlQuery = (page, filter, sort, order) => {
	let url = "";

	url += `?page=${page}`;
	// url += filter ? `&promotion_id=${filter.id}` : "";
	// url += `&order=${sort.id}`;
	// url += `&asc=${order.id}`;

	return url;
};

export const getCategories = (token, query) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/category/list${query}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};
