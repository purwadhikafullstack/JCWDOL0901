import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutButton = ({ cart }) => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col">
			<button
				type="button"
				className="flex items-center bg-green-500 text-green-100 rounded-lg w-fit mx-auto sm:ml-auto sm:mr-8 py-3 px-6 mb-6 disabled:opacity-50"
				onClick={() => navigate("/cart/checkout")}
				disabled={cart?.length === 0}
			>
				<span className="mr-8 font-bold">Checkout Cart</span>
				<span className="material-symbols-rounded">arrow_right</span>
			</button>
		</div>
	);
};

export default CheckoutButton;
