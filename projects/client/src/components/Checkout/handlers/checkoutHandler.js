import axios from "axios";

export const getDefaultAddress = () => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/address/default`, headers);
};

export const getUserAddresses = () => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/address/list`, headers);
};

export const getUserCart = () => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, headers);
};

const getFinalPrice = (original, promo) => {
	if (promo.Promotion.id === 2) {
		return original - promo.value;
	} else if (promo.Promotion.id === 3) {
		return original - (original * promo.value) / 100;
	}
};
export const getDisplayPrice = (item) => {
	const promo = item.Inventory.promo;

	const isBOGO = promo.Promotion.id === 4;
	const original = item.Inventory.Product.price;
	const final = isBOGO ? original : getFinalPrice(original, promo);

	return { final, original, isBOGO };
};
