import axios from "axios";

export const getPromotionsType = () => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/data/promotions`);
};

export const getInventoryPromotions = (token, query) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/promo/list${query}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const patchInventoryPromotions = (token, data) => {
	return axios.patch(`${process.env.REACT_APP_API_BASE_URL}/admin/promo/update`, data, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const getPromotionsSortBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "start_at", name: "Start Date" },
				{ id: "expired_at", name: "End Date" },
			],
		});
	});
};

export const getPromotionsOrder = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "1", name: "Ascending" },
				{ id: "0", name: "Descending" },
			],
		});
	});
};

export const generateUrlQuery = (page, filter, sort, order) => {
	let url = "";

	url += `?page=${page}`;
	url += filter ? `&promotion_id=${filter.id}` : "";
	url += `&order=${sort.id}`;
	url += `&asc=${order.id}`;

	return url;
};
