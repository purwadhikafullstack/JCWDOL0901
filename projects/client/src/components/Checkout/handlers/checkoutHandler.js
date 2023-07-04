import axios from "axios";
<<<<<<< HEAD
=======
import Swal from "sweetalert2";
import { clearCheckout } from "../../../redux/reducers/checkout/checkoutAction";
>>>>>>> development

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

<<<<<<< HEAD
const filterVoucherByBranch = (vouchers, globalState) => {
	const branch_id = globalState?.checkout?.cart[0]?.Inventory?.Branch?.id;
=======
const filterVoucherByBranch = (vouchers, cart) => {
	const branch_id = cart[0]?.Inventory?.Branch?.id;
>>>>>>> development

	return vouchers.filter((item) => item.Voucher.branch_id === branch_id || item.Voucher.branch_id === null);
};

<<<<<<< HEAD
const filterVoucherByCart = (vouchers, globalState) => {
	const cart = globalState?.checkout?.cart;
=======
const filterVoucherByCart = (vouchers, cart) => {
>>>>>>> development
	const inventory_ids = [];

	cart.forEach((item) => inventory_ids.push(item?.Inventory?.id));

	return vouchers.filter((item) => {
		const inventory_id = item?.Voucher?.inventory_id;

		return inventory_id === null || inventory_ids.includes(inventory_id);
	});
};

<<<<<<< HEAD
export const filterVoucherByBranchAndCart = (vouchers, globalState) => {
	const cartFilteredVouchers = filterVoucherByCart(vouchers, globalState);
	const branchFilteredVouchers = filterVoucherByBranch(cartFilteredVouchers, globalState);
=======
export const filterVoucherByBranchAndCart = (vouchers, cart) => {
	const cartFilteredVouchers = filterVoucherByCart(vouchers, cart);
	const branchFilteredVouchers = filterVoucherByBranch(cartFilteredVouchers, cart);
>>>>>>> development

	return branchFilteredVouchers;
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

<<<<<<< HEAD
export const postTransaction = (data) => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	return axios.post(`${process.env.REACT_APP_API_BASE_URL}/transaction/create`, data, headers);
=======
const promtCreateOrder = (data) =>
	Swal.fire({
		title: "Create Order?",
		html: `Total Payment: <b>Rp ${data.summary.total.toLocaleString("id")}</b>`,
		icon: "question",
		showCancelButton: true,
		confirmButtonColor: "#0EB177",
		cancelButtonColor: "#d33",
		confirmButtonText: "Confirm",
	});

const successAlert = (navigate, dispatch) => {
	Swal.fire({
		title: "Order Created!",
		html: `Send Payment Within 1 x 24 Hour<br><br><b class="mt-2">BCA 8885059123 A/N Groseria Store ID</b>`,
		icon: "success",
		confirmButtonColor: "#0EB177",
	});
	navigate("/order");
	dispatch(clearCheckout());
};

export const postTransaction = (data, dispatch, navigate) => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	promtCreateOrder(data).then(async (result) => {
		if (result.isConfirmed) {
			await axios
				.post(`${process.env.REACT_APP_API_BASE_URL}/transaction/create`, data, headers)
				.then((result) => {
					successAlert(navigate, dispatch);
				})
				.catch((error) => {
					Swal.fire(error.response.data);
				});
		}
	});
>>>>>>> development
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

<<<<<<< HEAD
=======
export const postLogisticServices = (checkout, courier) => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };
	const body = {
		branch_city_id: checkout.branch.city_id,
		city_id: checkout.address.City.id,
		weight: checkout.summary.weight,
		courier,
	};

	return axios.post(`${process.env.REACT_APP_API_BASE_URL}/rajaongkir/cost`, body, headers);
};

>>>>>>> development
export const getMinSpend = (data) => {
	if (data?.Voucher?.min_spend) {
		return `With a minimum purchase of Rp ${data?.Voucher?.min_spend.toLocaleString("id")}`;
	} else {
		return `Without minimum purchase`;
	}
};

const getFinalPrice = (original, promo) => {
	if (promo.Promotion.id === 2) {
		let discountedPrice = original - promo.value;
		if (discountedPrice < 0) discountedPrice = 0;

		return discountedPrice;
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
