import axios from "axios";

export const getProductDetail = (inventory_id) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/${inventory_id}`);
};
