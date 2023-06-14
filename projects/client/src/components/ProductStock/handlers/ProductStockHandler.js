import axios from "axios";

export const getBranchInventories = (query = "") => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/inventory/list${query}`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

export const sortDefault = { id: "name", name: "Product Name" };
export const orderDefault = { id: "1", name: "Ascending" };

export const resetSetting = (setName, setFilterBy, setFilter, setSort, setOrder, setPage) => {
	setName("");
	setFilterBy("");
	setFilter("");
	setSort(sortDefault);
	setOrder(orderDefault);
	setPage(1);
};

export const getSortBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "name", name: "Product Name" },
				{ id: "stock", name: "Stock" },
			],
		});
	});
};

export const getOrder = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "1", name: "Ascending" },
				{ id: "0", name: "Descending" },
			],
		});
	});
};

export const getFilterBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [{ id: "category_id", name: "Category" }],
		});
	});
};

export const getCategories = () => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/category/list`);
};

export const generateUrlQuery = (name = "", page, filterBy, filter, sort, order) => {
	let url = "";

	url += `?page=${page}`;
	url += `&name=${name}`;
	url += filterBy?.id ? `&${filterBy.id}=${filter.id}` : "";
	url += `&order=${sort.id}`;
	url += `&asc=${order.id}`;

	return url;
};