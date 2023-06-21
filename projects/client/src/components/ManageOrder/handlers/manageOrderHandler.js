import axios from "axios";

export const getFilterBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "status_id", name: "Status" },
				{ id: "branch_id", name: "Branch" },
				{ id: "voucher_id", name: "Voucher" },
			],
		});
	});
};

export const getFilterByForBranchAdmin = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "status_id", name: "Status" },
				{ id: "voucher_id", name: "Voucher" },
			],
		});
	});
};

export const getStatuses = () => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/data/statuses`);
};

export const getBranches = () => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/branch/list`);
};

export const getVouchers = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: 0, name: "Not Using" },
				{ id: 1, name: "Using" },
			],
		});
	});
};

export const getOrderBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "created_at", name: "Date" },
				{ id: "amount", name: "Amount" },
			],
		});
	});
};

export const getOrderOfDate = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "1", name: "Latest" },
				{ id: "0", name: "Oldest" },
			],
		});
	});
};

export const getOrderOfAmount = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "1", name: "Low to High" },
				{ id: "0", name: "High to Low" },
			],
		});
	});
};

export const resetSetting = (setStartDate, setEndDate, setName, setFilterBy, setFilter, setSort, setOrder) => {
	setStartDate("");
	setEndDate("");
	setName("");
	setFilterBy("");
	setFilter("");
	setSort("");
	setOrder("");
};

export const generateUrlQuery = (name, startDate, endDate, filterBy, filter, sort, order, page) => {
	let url = "";

	url += `?page=${page}`;
	url += `&name=${name}`;
	url += `&start_after=${startDate}`;
	url += `&end_before=${endDate}`;
	url += filter ? `&${filterBy.id}=${filter.id}` : "";
	url += order.id ? `&order=${sort.id}` : "";
	url += order.id ? `&asc=${order.id}` : "";

	return url;
};
