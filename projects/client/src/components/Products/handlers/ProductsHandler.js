import axios from "axios";

export const generateUrlQuery = (page, itemPerPage, branch_id, category_id, filter, sort, order) => {
	let url = "";

	url += `?page=${page}`;
	url += `&itemPerPage=${itemPerPage}`;
	url += filter ? `&name=${filter}` : "";
	url += branch_id ? `&branch_id=${branch_id}` : "";
	url += category_id ? `&category_id=${category_id}` : "";
	url += sort ? `&order=${sort.id}` : "";
	url += order ? `&asc=${order.id}` : "";

	return url;
};

export const getProducts = (query) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/list${query}`);
};

export const getProductsSortBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "name", name: "Name" },
				{ id: "price", name: "Price" },
			],
		});
	});
};

export const getOrderByName = (sort) => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "1", name: "A to Z" },
				{ id: "0", name: "Z to A" },
			],
		});
	});
};

export const getOrderByPrice = (sort) => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "1", name: "Low to High" },
				{ id: "0", name: "High to Low" },
			],
		});
	});
};

const getFinalPrice = (original, promoDetail) => {
	if (promoDetail?.Promotion?.id === 2) {
		console.log(original - promoDetail?.value);
		return original - promoDetail?.value > 0 ? original - promoDetail?.value : 0;
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
