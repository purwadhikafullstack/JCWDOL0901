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
			data: [{ id: "updated_at", name: "Date" }],
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
			data: [{ id: "total_spending", name: "Total Spending" }],
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
export const getSortQuantityBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [{ id: "qty", name: "Quantity" }],
		});
	});
};

export const getOrderOfQuantity = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "0", name: "Highest" },
				{ id: "1", name: "Lowest" },
			],
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

export const generateUrlQuery = (page, sort, order, startDate, endDate, itemPerPage) => {
	let url = "";

	url += `?page=${page}`;
	url += startDate ? `&start_after=${startDate}` : "";
	url += endDate ? `&end_before=${endDate}` : "";
	url += itemPerPage ? `&item_per_page=${itemPerPage}` : "";
	url += sort?.id ? `&sort=${sort?.id}` : "";
	url += order?.id ? `&order=${order?.id}` : "";

	return url;
};
