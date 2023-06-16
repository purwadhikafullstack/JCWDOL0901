import axios from "axios";

export const getProductsRecommendation = (id) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/recommend?branch_id=${id}`);
};
