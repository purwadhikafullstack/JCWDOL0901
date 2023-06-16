import axios from "axios";

export const getProductDetail = (inventory_id) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/${inventory_id}`);
};

export const handleIncrement = (setAmount, stock) => {
	setAmount((previousValue) => {
		if (previousValue < stock) {
			return previousValue + 1;
		}

		return previousValue;
	});
};

export const handleDecrement = (setAmount) => {
	setAmount((previousValue) => {
		if (previousValue > 0) {
			return previousValue - 1;
		}

		return previousValue;
	});
};
