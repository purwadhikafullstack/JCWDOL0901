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

export const filterVoucherByBranch = (vouchers, globalState) => {
	const branch_id = globalState?.checkout?.cart[0]?.Inventory?.Branch?.id;

	return vouchers.filter((item) => item.Voucher.branch_id === branch_id || item.Voucher.branch_id === null);
};

export const filterVoucherByCart = (vouchers, globalState) => {
	const cart = globalState?.checkout?.cart;
	const inventory_ids = [];

	cart.forEach((item) => inventory_ids.push(item?.Inventory?.id));

	return vouchers.filter((item) => {
		const inventory_id = item?.Voucher?.inventory_id;

		return inventory_id === null || inventory_ids.includes(inventory_id);
	});
};

export const getUserVouchers = () => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/voucher/user`, headers);
};

export const getUserCart = () => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, headers);
};

export const getMaxDiscount = (data) => {
	let text = "Discount Up To ";

	if (data?.Voucher?.max_discount) {
		text += `Rp ${data?.Voucher?.max_discount.toLocaleString("id")}`;
	} else {
		text += `Rp ${data?.Voucher?.value.toLocaleString("id")}`;
	}

	return text;
};

export const getMinSpend = (data) => {
	if (data?.Voucher?.min_spend) {
		return `With a minimum purchase of ${data?.Voucher?.min_spend}`;
	} else {
		return `Without minimum purchase`;
	}
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
