import axios from "axios";

export const getProductsRecommendation = (id) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/recommend?branch_id=${id}`);
};

export const getRelatedProducts = (branch_id, category_id, inventory_id) => {
	return axios.get(
		`${process.env.REACT_APP_API_BASE_URL}/product/related?branch_id=${branch_id}&category_id=${category_id}&id=${inventory_id}`,
	);
};
