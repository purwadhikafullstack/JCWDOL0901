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

export const getStatuses = () => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/data/statuses`);
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
