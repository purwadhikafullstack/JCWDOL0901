import React from "react";
<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
>>>>>>> development
import { postTransaction } from "./handlers/checkoutHandler";

const CreateOrder = () => {
	const checkout = useSelector((state) => state.checkout);
<<<<<<< HEAD

=======
	const dispatch = useDispatch();
	const navigate = useNavigate();
>>>>>>> development
	return (
		<div className="flex flex-col">
			<button
				type="button"
<<<<<<< HEAD
				className="flex items-center bg-green-500 text-green-100 rounded-lg w-fit ml-auto mr-8 py-3 px-6 mb-6"
				disabled={!checkout?.address?.id || !checkout?.cart?.length}
				onClick={() => postTransaction(checkout)}
=======
				className="flex items-center bg-green-500 text-green-100 rounded-lg w-fit ml-auto mr-8 py-3 px-6 mb-6 disabled:opacity-50"
				disabled={!checkout?.address?.id || !checkout?.cart?.length || !checkout?.logistic?.code}
				onClick={() => postTransaction(checkout, dispatch, navigate)}
>>>>>>> development
			>
				<span className="mr-8 font-bold">Create Order </span>
				<span className="material-symbols-rounded">arrow_right</span>
			</button>
		</div>
	);
};

export default CreateOrder;
