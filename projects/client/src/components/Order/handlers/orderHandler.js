import axios from "axios";
import Swal from "sweetalert2";

export const generateUrlQuery = (name, startDate, endDate, filterBy, filter, sort, order, page) => {
	let url = "";

	url += `?page=${page}`;
	url += `&id=${name}`;
	url += startDate ? `&start_after=${new Date(startDate)}` : "";
	url += endDate ? `&end_before=${new Date(new Date(endDate).getTime() + 1000 * 60 * 60 * 24)}` : "";
	url += filter ? `&${filterBy.id}=${filter.id}` : "";
	url += order.id ? `&order=${sort.id}` : "";
	url += order.id ? `&asc=${order.id}` : "";

	return url;
};

export const getUserTransactions = () => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/transaction/list`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

export const cancelOrderHandler = async (id, navigate) => {
	try {
		const token = localStorage.getItem("token");
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/transaction/${id}/cancel`, null, config);
		Swal.fire({
			icon: "success",
			title: "Order has been canceled",
			showConfirmButton: false,
			timer: 1000,
		});
		setTimeout(() => {
			navigate("/order");
		}, 2000);
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await cancelOrderErrorHandler(error),
			showConfirmButton: false,
			timer: 1000,
		});
	}
};

export const confirmOrderHandler = async (id, navigate) => {
	try {
		Swal.fire({
			title: "Do you want to confirm the delivery of you order?",
			showCancelButton: true,
			confirmButtonText: "Confirm order",
			confirmButtonColor: "#53B97C",
			cancelButtonText: "No",
			customClass: {
				actions: "my-actions",
				cancelButton: "order-1",
				confirmButton: "order-2",
			},
		}).then(async (result) => {
			if (result.isConfirmed) {
				const token = localStorage.getItem("token");
				const config = {
					headers: { Authorization: `Bearer ${token}` },
				};
				await axios.patch(`${process.env.REACT_APP_API_BASE_URL}/transaction/${id}/confirm`, null, config);
				Swal.fire({
					icon: "success",
					title: "You have confirm the delivery of your order",
					showConfirmButton: false,
					timer: 1000,
				});
				setTimeout(() => {
					navigate("/order");
				}, 2000);
			}
		});
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: await cancelOrderErrorHandler(error),
			showConfirmButton: false,
			timer: 1000,
		});
	}
};

const cancelOrderErrorHandler = async (error) => {
	if (error?.code === "ERR_NETWORK") {
		return "Server unreachable, try again later!";
	}
	return "Something went wrong!";
};
