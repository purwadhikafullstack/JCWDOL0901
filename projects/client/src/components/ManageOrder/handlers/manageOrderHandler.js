import axios from "axios";
import Swal from "sweetalert2";

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
				{ id: "0", name: "Latest" },
				{ id: "1", name: "Oldest" },
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

export const getBorderColor = (status) => {
	if (status === 1) {
		return "border-gray-300";
	} else if (status === 2) {
		return "border-yellow";
	} else if (status === 3) {
		return "border-purple";
	} else if (status === 4) {
		return "border-cyan";
	} else if (status === 5) {
		return "border-green-200";
	}

	return "border-red";
};

export const resetSetting = (
	setStartDate,
	setEndDate,
	setName,
	setFilterBy,
	setFilter,
	setSort,
	setOrder,
	setInput,
) => {
	setStartDate("");
	setEndDate("");
	setName("");
	setFilterBy("");
	setFilter("");
	setSort("");
	setOrder("");
	setInput("");
};

export const generateUrlQuery = (name, startDate, endDate, filterBy, filter, sort, order, page) => {
	let url = "";

	url += `?page=${page}`;
	url += name ? `&id=${name}` : "";
	url += startDate ? `&start_after=${startDate}` : "";
	url += endDate ? `&end_before=${endDate}` : "";
	url += filter ? `&${filterBy.id}=${filter.id}` : "";
	url += order.id ? `&order=${sort.id}` : "";
	url += order.id ? `&asc=${order.id}` : "";

	return url;
};

export const getAdminTransactions = (query) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/list${query}`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};
