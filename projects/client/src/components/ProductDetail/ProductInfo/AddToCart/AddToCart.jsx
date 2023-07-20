import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addProducts } from "../../../Products/handlers/productsHandler";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const DesktopAddToCart = ({ amount }) => {
	const user = useSelector((state) => state.user);
	const { inventory_id } = useParams();
	const dispatch = useDispatch();
	return (
		<button
			type="button"
			disabled={amount === 0 || !user?.hasLogged}
			onClick={() => {
				addProducts(inventory_id, amount, dispatch);
			}}
			className="bg-green-200 text-white font-semibold px-6 sm:px-12 py-2 sm:py-4 rounded-xl disabled:opacity-50 lg:w-full lg:px-0 lg:py-1.5 lg:rounded-lg"
		>
			Add To Cart
		</button>
	);
};

export default DesktopAddToCart;
