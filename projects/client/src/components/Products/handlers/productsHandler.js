import axios from "axios";
import Swal from "sweetalert2";
import { setCartUpdate } from "../../../redux/reducers/user/userAction";
import { toCurrency } from "../../../helper/currency";

const productErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	} else if (error?.response?.status === 400) {
		return error?.response?.data;
	} else if (error?.response?.status === 403) {
		return "You must login for adding product to cart";
	} else if (error?.response?.data === "SequelizeUniqueConstraintError") {
		return "Product already added in cart";
	}

	return "Something went wrong!";
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

export const addProducts = async (inventory_id, quantity, dispatch, user) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const cart = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart`, config);

		if (cart?.data.length && user?.branch?.id !== cart?.data[0]?.Inventory?.Branch?.id) {
			Swal.fire({
				title: "Are you sure you want to add this product?",
				text: "This product comes from a different branch than the other products in the cart. If you continue, we will clear all of your previous items in the cart",
				showCancelButton: true,
				confirmButtonText: "Add product",
				confirmButtonColor: "#53B97C",
				cancelButtonText: "Cancel",
				customClass: {
					actions: "my-actions",
					cancelButton: "order-1",
					confirmButton: "order-2",
				},
			}).then(async (result) => {
				if (result.isConfirmed) {
					await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/cart/clear`, config);
					const body = { inventory_id, quantity };
					await axios.post(`${process.env.REACT_APP_API_BASE_URL}/cart/add`, body, config);
					dispatch(setCartUpdate({ cartUpdate: true }));

					Swal.fire({
						icon: "success",
						title: "New product has been added to cart",
						showConfirmButton: false,
						timer: 1000,
					});
				}
			});
			return;
		} else {
			const body = { inventory_id, quantity };
			await axios.post(`${process.env.REACT_APP_API_BASE_URL}/cart/add`, body, config);
			dispatch(setCartUpdate({ cartUpdate: true }));

			Swal.fire({
				icon: "success",
				title: "New product has been added to cart",
				showConfirmButton: false,
				timer: 1000,
			});
		}
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await productErrorHandler(error),
			showConfirmButton: false,
			timer: 2000,
		});
	}
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
	if (!promoDetail?.isActive)
		setPrice((previousValue) => ({ ...previousValue, original: product.price, final: product.price }));
	else {
		const original = promoDetail?.Promotion?.id === 4 ? null : product.price;
		const final = getFinalPrice(product.price, promoDetail);
		const promo = getPromo(promoDetail);

		setPrice({ original, final, promo });
	}
};
