import axios from "axios";
import Swal from "sweetalert2";

const validateProductInput = (values) => {
	const formData = new FormData();
	for (let value in values) {
		formData.append(value, values[value]);
	}
	return formData;
};

const manageProductErrorHandler = async (error) => {
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

export const createProductHandler = async (input, navigate) => {
	try {
		const validatedInput = await validateProductInput(input);
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.post(`${process.env.REACT_APP_API_BASE_URL}/product/create`, validatedInput, config);

		Swal.fire({
			icon: "success",
			title: "New product has been created",
			showConfirmButton: false,
			timer: 2000,
		});
		navigate(-1);
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await manageProductErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};

export const updateProductHandler = async (input, item, navigate) => {
	try {
		const validatedInput = await validateProductInput(input);
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/product/${item.id}/update`, validatedInput, config);

		Swal.fire({
			icon: "success",
			title: "Product has been updated",
			showConfirmButton: false,
			timer: 2000,
		});
		navigate(-1);
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await manageProductErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};


export const deleteProductHandler = async (id, navigate) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/product/${id}/delete`, config);

		Swal.fire({
			icon: "success",
			title: "Product has been deleted",
			showConfirmButton: false,
			timer: 2000,
		});
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await manageProductErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};

export const generateUrlQuery = (page, itemPerPage, filter, sort, order, name, filterBy) => {
	let url = "";

	url += `?page=${page}`;
	url += `&itemPerPage=${itemPerPage}`;
	url += name ? `&name=${name}` : "";
	url += filter?.id ? `&${filterBy?.id}=${filter?.id}` : "";
	url += sort ? `&order=${sort.id}` : "";
	url += order ? `&asc=${order.id}` : "";

	return url;
};

export const getProductsOnly = (token, query) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/product/only${query}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const editProduct = (item, navigate) => {
	navigate("update", { state: item });
};

export const showDeleteAlert = (item, setOpen, setCategoryId, setCategoryName) => {
	setOpen(true);
	setCategoryId(item.id);
	setCategoryName(item.name);
};

export const getCategorySortBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [{ id: "name", name: "Name" }],
		});
	});
};

export const getCategoryOrder = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "1", name: "A to Z" },
				{ id: "0", name: "Z to A" },
			],
		});
	});
};
