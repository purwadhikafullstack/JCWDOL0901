import axios from "axios";

export const generateUrlQuery = (name, startDate, endDate, filterBy, filter, sort, order, page) => {
	let url = "";

	url += `?page=${page}`;
	url += `&id=${name}`;
	url += startDate ? `&start_after=${new Date(startDate)}` : "";
	url += endDate ? `&end_before=${new Date(new Date(endDate).getTime() + 1000 * 60 * 60 * 24)}` : "";
	url += filter ? `&${filterBy.id}=${filter.id}` : "";
	url += order.id ? `&order=${sort.id}` : "";
	url += order.id ? `&asc=${order.id}` : "";

	return url;
};

export const getUserTransactions = () => {
	// return axios.get(`${process.env.REACT_APP_API_BASE_URL}/transaction/list${query}`, {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/transaction/list`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};
