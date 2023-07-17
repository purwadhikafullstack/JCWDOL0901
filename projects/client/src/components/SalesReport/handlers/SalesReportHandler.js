import axios from "axios";

export const getSalesReportByProduct = (query = "") => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/report/product${query}`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

export const getSalesReportByTransaction = (query = "") => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/report/transaction${query}`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

export const getSalesReportByUser = (query = "") => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/report/user${query}`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

export const sortDefault = { id: "name", name: "Product Name" };
export const orderDefault = { id: "1", name: "A to Z" };

export const resetSetting = (setName, setFilterBy, setFilter, setSort, setOrder, setPage) => {
	setName("");
	setFilterBy("");
	setFilter("");
	setSort("");
	setOrder("");
	setPage(1);
};

export const getSortBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [{ id: "created_at", name: "Date" }],
		});
	});
};

export const getOrderOfDate = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "0", name: "Latest" },
				{ id: "1", name: "Oldest" },
			],
		});
	});
};
export const getSortTotalSpendingBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [{ id: "created_at", name: "Total Spending" }],
		});
	});
};

export const getOrderOfTotalSpending = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "0", name: "Highest" },
				{ id: "1", name: "Lowest" },
			],
		});
	});
};

export const getFilterBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [{ id: "description", name: "Changes" }],
		});
	});
};

export const getSalesBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "product", name: "Product" },
				{ id: "transaction", name: "Transaction" },
				{ id: "user", name: "User" },
			],
		});
	});
};

export const getFilterOfDescription = () => {
	return new Promise(async (resolve, reject) => {
		resolve({
			data: [
				{ id: "all", name: "All" },
				{ id: "sales", name: "Sales" },
				{ id: "other", name: "Other" },
			],
		});
	});
};

export const generateUrlQuery = (name = "", page, filterBy, filter, sort, order, startDate, endDate, itemPerPage) => {
	let url = "";

	url += `?page=${page}`;
	// url += `&name=${name}`;
	url += startDate ? `&start_after=${startDate}` : "";
	url += endDate ? `&end_before=${endDate}` : "";
	url += itemPerPage ? `&item_per_page=${itemPerPage}` : "";
	// url += filter?.id ? `&${filterBy?.id}=${filter?.id}` : "";
	// url += sort?.id ? `&order=${sort?.id}` : "";
	// url += order?.id ? `&asc=${order?.id}` : "";
	// url += order?.id ? `&asc=${order?.id}` : "";

	return url;
};
