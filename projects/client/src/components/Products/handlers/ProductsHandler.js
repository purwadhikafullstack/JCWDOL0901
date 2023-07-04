import axios from "axios";
import Swal from "sweetalert2";

const validateProductInput = (values) => {
	const formData = new FormData();
	for (let value in values) {
		formData.append(value, values[value]);
	}
	return formData;
};

const productErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.status === 403) {
		return error?.response?.data;
	} else if (error?.response?.data?.code === "LIMIT_FILE_SIZE") {
		return error?.response?.data?.message;
	} else if (error?.response?.data === "File type not allowed") {
		return error?.response?.data;
	}

	return "Something went wrong!";
};

export const createProductHandler = async (input, navigate) => {
	try {
		const validatedInput = await validateProductInput(input);
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.post(`${process.env.REACT_APP_API_BASE_URL}/product/create`, validatedInput, config);

		Swal.fire({
			icon: "success",
			title: "New product has been created",
			showConfirmButton: false,
			timer: 2000,
		});
		navigate(-1);
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await productErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};

export const updateProductHandler = async (input, item, navigate) => {
	try {
		const validatedInput = await validateProductInput(input);
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/product/${item.id}/update`, validatedInput, config);

		Swal.fire({
			icon: "success",
			title: "Product has been updated",
			showConfirmButton: false,
			timer: 2000,
		});
		navigate(-1);
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await productErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};


export const deleteProductHandler = async (id, navigate) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/product/${id}/delete`, config);

		Swal.fire({
			icon: "success",
			title: "Product has been deleted",
			showConfirmButton: false,
			timer: 2000,
		});
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await productErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
};

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

export const getProductsOnly = (query) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/product/only${query}`);
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
export const getProductsFilterBy = () => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "category_id", name: "Category" },
				{ id: "active", name: "Status" },
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

export const getProductsFilterByCategory = (sort) => {
	return new Promise(async (resolve, reject) => {
		const categories = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/category/list`);
		resolve({
			data: categories.data.rows,
		});
	});
};

export const getProductsFilterByStatus = (sort) => {
	return new Promise((resolve, reject) => {
		resolve({
			data: [
				{ id: "1", name: "Active" },
				{ id: "0", name: "Not Active" },
			],
		});
	});
};

const getFinalPrice = (original, promoDetail) => {
	if (promoDetail?.Promotion?.id === 2) {
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
