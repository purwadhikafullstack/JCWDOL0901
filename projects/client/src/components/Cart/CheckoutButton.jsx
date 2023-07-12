import React from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { postTransaction } from "./handlers/checkoutHandler";

const CheckoutButton = () => {
	// const checkout = useSelector((state) => state.checkout);
	// const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<div className="flex flex-col">
			<button
				type="button"
				className="flex items-center bg-green-500 text-green-100 rounded-lg w-fit ml-auto mr-8 py-3 px-6 mb-6 disabled:opacity-50"
				onClick={() => navigate("/cart/checkout")}
			>
				<span className="mr-8 font-bold">Checkout Cart</span>
				<span className="material-symbols-rounded">arrow_right</span>
			</button>
		</div>
	);
};

export default CheckoutButton;
