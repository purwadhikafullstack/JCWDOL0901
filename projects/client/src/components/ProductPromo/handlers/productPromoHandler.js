import axios from "axios";

export const getPromotionsType = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const inventoryPromotions = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/data/promotions`);

			resolve({ data: await inventoryPromotions.data.splice(1) });
		} catch (error) {
			reject(error);
		}
	});
};

export const getInventoryPromotions = (query) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/promo/list${query}`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

export const patchInventoryPromotions = (data) => {
	return axios.patch(`${process.env.REACT_APP_API_BASE_URL}/admin/promo/update`, data, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
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

export const generateUrlQuery = (name, page, filter, sort, order) => {
	let url = "";

	url += `?page=${page}`;
	url += `&name=${name}`;
	url += filter ? `&promotion_id=${filter.id}` : "";
	url += `&order=${sort.id}`;
	url += `&asc=${order.id}`;

	return url;
};

export const resetSetting = (setFilter, setSort, setOrder, setPage, setName, setInput) => {
	setFilter("");
	setSort("");
	setOrder("");
	setPage(1);
	setName("");
	setInput("");
};
