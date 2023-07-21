import React from "react";
import { useSelector } from "react-redux";
import { createSearchParams, useNavigate } from "react-router-dom";

const AddProductButton = ({ cart }) => {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const params = { branch_id: user?.branch?.id };
	return (
		<div className="flex flex-col">
			<button
				type="button"
				className="flex items-center bg-green-500 text-green-100 rounded-lg w-fit mx-auto sm:ml-auto sm:mr-8 py-3 px-6 mb-6 disabled:opacity-50"
				onClick={() => {
					navigate({
						pathname: "/products",
						search: `?${createSearchParams(params)}`,
					});
				}}
				disabled={cart?.length === 0}
			>
				<span className="font-bold">Add Product</span>
			</button>
		</div>
	);
};

export default AddProductButton;
