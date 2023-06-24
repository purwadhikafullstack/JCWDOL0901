import axios from "axios";
import Swal from "sweetalert2";

export const getTransactionDetail = (transaction_id) => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}` } };

	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/transaction/${transaction_id}`, headers);
};

export const getDueDate = (created_at) => {
	const date = new Date(created_at.split("T")[0]) + 24 * 60 * 60 * 1000;

	return date.split(" ").slice(0, 4).join(" ").replace(" ", ", ");
};

export const postProof = (data) => {
	const token = localStorage.getItem("token");
	const headers = { headers: { Authorization: `Bearer ${token}`, "Content-type": "multipart/form-data" } };

	return axios.post(`${process.env.REACT_APP_API_BASE_URL}/transaction/proof`, data, headers);
};

export const promptUploadProof = () =>
	Swal.fire({
		title: "Upload Payment Proof?",
		html: `We will verify within <b>1 x 24 hour</b>`,
		icon: "question",
		showCancelButton: true,
		confirmButtonColor: "#0EB177",
		cancelButtonColor: "#d33",
		confirmButtonText: "Confirm",
	});

export const successAlert = (navigate) => {
	Swal.fire({
		title: "Proof Uploaded!",
		html: `Please wait for confirmation`,
		icon: "success",
		confirmButtonColor: "#0EB177",
	});
	navigate("/order");
};

export const errorAlert = () => {
	Swal.fire({
		title: "Something went wrong!",
		html: `Please try again`,
		icon: "error",
		confirmButtonColor: "#0EB177",
	});
};
