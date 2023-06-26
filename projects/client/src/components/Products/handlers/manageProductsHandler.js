import axios from "axios";
import Swal from "sweetalert2";

export const generateUrlQuery = (page, itemPerPage, category_id, filter, sort, order, name) => {
	let url = "";

	url += `?page=${page}`;
	url += `&itemPerPage=${itemPerPage}`;
	url += name ? `&name=${name}` : "";
	url += category_id ? `&category_id=${category_id}` : "";
	url += sort ? `&order=${sort.id}` : "";
	url += order ? `&asc=${order.id}` : "";

	return url;
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
	} else if (error?.response?.data === "ER_ROW_IS_REFERENCED_2") {
		return "Cannot delete, there are still products under this category";
	}

	return "Something went wrong!";
};

export const deleteCategoryHandler = async (id, navigate) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/category/${id}/delete`, config);

		Swal.fire({
			icon: "success",
			title: "Category has been deleted",
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

export const getCategories = (token, query) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/category/list${query}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const getProductsOnly = (token, query) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/only${query}`, {
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
