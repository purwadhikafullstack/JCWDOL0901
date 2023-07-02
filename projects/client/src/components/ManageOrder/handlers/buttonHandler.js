import axios from "axios";
import Swal from "sweetalert2";

export const sendUserOrder = (transaction_id, setIsUpdated) => {
	Swal.fire({
		title: "Do you want to send the order?",
		showCancelButton: true,
		confirmButtonText: "Send order",
		confirmButtonColor: "#53B97C",
		cancelButtonText: "No",
		customClass: {
			actions: "my-actions",
			cancelButton: "order-1",
			confirmButton: "order-2",
		},
	}).then((result) => {
		if (result.isConfirmed) {
			axios.patch(`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/${transaction_id}/send`, null, {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
			});
			setIsUpdated(true);
			Swal.fire("Updated!", "", "success");
		}
	});
	return;
};

export const cancelUserOrder = (transaction_id, setIsUpdated) => {
	Swal.fire({
		title: "Do you want to cancel the order?",
		showCancelButton: true,
		confirmButtonText: "Cancel order",
		confirmButtonColor: "#EB5757",
		cancelButtonText: "No",
		customClass: {
			actions: "my-actions",
			cancelButton: "order-1",
			confirmButton: "order-2",
		},
	}).then((result) => {
		if (result.isConfirmed) {
			axios.patch(`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/${transaction_id}/cancel`, null, {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
			});
			setIsUpdated(true);
			Swal.fire("Updated!", "", "success");
		}
	});
	return;
};

export const confirmUserOrder = (transaction_id, setIsUpdated) => {
	Swal.fire({
		title: "Do you want to confirm the order?",
		showCancelButton: true,
		confirmButtonText: "Confirm order",
		confirmButtonColor: "#53B97C",
		cancelButtonText: "No",
		customClass: {
			actions: "my-actions",
			cancelButton: "order-1",
			confirmButton: "order-2",
		},
	}).then((result) => {
		if (result.isConfirmed) {
			axios.patch(
				`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/${transaction_id}/confirm-proof`,
				null,
				{
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				},
			);
			setIsUpdated(true);
			Swal.fire("Updated!", "", "success");
		}
	});
	return;
};

export const rejectUserOrder = (transaction_id, setIsUpdated) => {
	Swal.fire({
		title: "Do you want to reject the order?",
		showCancelButton: true,
		confirmButtonText: "Reject order",
		confirmButtonColor: "#E08020",
		cancelButtonText: "No",
		customClass: {
			actions: "my-actions",
			cancelButton: "order-1",
			confirmButton: "order-2",
		},
	}).then((result) => {
		if (result.isConfirmed) {
			axios.patch(
				`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/${transaction_id}/reject-proof`,
				null,
				{
					headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				},
			);
			setIsUpdated(true);
			Swal.fire("Updated!", "", "success");
		}
	});
	return;
};
