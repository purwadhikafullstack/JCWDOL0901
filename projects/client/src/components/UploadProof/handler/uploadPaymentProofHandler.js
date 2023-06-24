import axios from "axios";

export const getTransactionDetail = (transaction_id) => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/transaction/${transaction_id}`, headers);
};

export const getDueDate = (created_at) => {
	const date = new Date(created_at.split("T")[0]) + 24 * 60 * 60 * 1000;

	return date.split(" ").slice(0, 4).join(" ").replace(" ", ", ");
};

export const postProof = (data) => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}`, "Content-type": "multipart/form-data" } };

	return axios.post(`${process.env.REACT_APP_API_BASE_URL}/transaction/proof`, data, headers);
};
