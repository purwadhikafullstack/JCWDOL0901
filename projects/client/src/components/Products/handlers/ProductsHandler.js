import axios from "axios";

export const generateUrlQuery = (page, itemPerPage, branch_id, category_id, filter) => {
	let url = "";

	url += `?page=${page}`;
	url += `&itemPerPage=${itemPerPage}`;
	url += filter ? `&name=${filter}` : "";
	url += branch_id ? `&branch_id=${branch_id}` : "";
	url += category_id ? `&category_id=${category_id}` : "";
	// url += sort ? `&order=${sort.id}` : "";
	// url += order ? `&asc=${order.id}` : "";

	return url;
};

export const getProducts = (query) => {
	console.log(query);
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/list${query}`);
};

export const getProductsSortBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [{ id: "name", name: "Name" }],
		});
	});
};

export const getProductsOrder = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "1", name: "Ascending" },
				{ id: "0", name: "Descending" },
			],
		});
	});
};
