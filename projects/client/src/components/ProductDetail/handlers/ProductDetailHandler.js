import axios from "axios";

export const getProductDetail = (inventory_id) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/${inventory_id}`);
};

const getFinalPrice = (original, promoDetail) => {
	if (promoDetail?.Promotion?.id === 2) {
		const discountedPrice = original - promoDetail?.value;
		return discountedPrice >= 0 ? discountedPrice : 0;
	} else if (promoDetail?.Promotion?.id === 3) {
		return original - (promoDetail?.value / 100) * original;
	}

	return original;
};

const getPromo = (promoDetail) => {
	let promo;

	if (promoDetail?.Promotion?.id === 2) {
		promo = { value: `Save Rp ${promoDetail?.value.toLocaleString("id")}`, type: promoDetail?.Promotion?.name };
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
