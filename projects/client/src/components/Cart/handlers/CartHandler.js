import axios from "axios";
import { toCurrency } from "../../../helper/currency";
import { setCartUpdate } from "../../../redux/reducers/user/userAction";

export const getProductDetail = (inventory_id) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/${inventory_id}`);
};

export const getUserCart = () => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, headers);
};

const getFinalPrice = (original, promoDetail) => {
	if (promoDetail?.Promotion?.id === 2) {
		let discountedPrice = original - promoDetail?.value;
		if (discountedPrice < 0) discountedPrice = 0;

		return discountedPrice;
	} else if (promoDetail?.Promotion?.id === 3) {
		return original - (promoDetail?.value / 100) * original;
	}

	return original;
};

const getPromo = (promoDetail) => {
	let promo;

	if (promoDetail?.Promotion?.id === 2) {
		promo = { value: `Save ${toCurrency(promoDetail?.value)}`, type: promoDetail?.Promotion?.name };
	} else if (promoDetail?.Promotion?.id === 3) {
		promo = { value: `${promoDetail?.value}% off`, type: promoDetail?.Promotion?.name };
	} else if (promoDetail?.Promotion?.id === 4) {
		promo = { value: `Buy 1 Get 1!` };
	}

	return promo;
};

export const determinePrice = (product, setPrice) => {
	const promoDetail = product?.Inventories[0]?.promo;

	if (!promoDetail?.value) setPrice((previousValue) => ({ ...previousValue, original, final: original }));

	const original = promoDetail?.Promotion?.id === 4 ? null : product.price;
	const final = getFinalPrice(product.price, promoDetail);
	const promo = getPromo(promoDetail);

	setPrice({ original, final, promo });
};

export const handleIncrement = async (inventory_id, quantity, stock, setIsUpdate) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const body = { inventory_id, quantity: quantity + 1 };
		if (quantity < stock) {
			await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/cart/update`, body, config);
			setIsUpdate(true);
		}
	} catch (error) {
		alert(error);
	}
};

export const handleDecrement = async (inventory_id, quantity, stock, setIsUpdate, dispatch) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const body = { inventory_id, quantity: quantity - 1 };
		if (quantity === 1) {
			await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/cart/delete/${inventory_id}`, config);
			setIsUpdate(true);
			dispatch(setCartUpdate({ cartUpdate: true }));
		}
		if (quantity > 1) {
			await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/cart/update`, body, config);
			setIsUpdate(true);
		}
	} catch (error) {
		alert(error);
	}
};

export const getDisplayPrice = (item) => {
	const promo = item.Inventory.promo;

	const isBOGO = promo.Promotion.id === 4;
	const original = item.Inventory.Product.price;
	const final = isBOGO ? original : getFinalPrice(original, promo);

	return { final, original, isBOGO };
};
