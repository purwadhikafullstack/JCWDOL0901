import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addProducts } from "../../../Products/handlers/productsHandler";
import { useParams } from "react-router-dom";

const DesktopAddToCart = ({ amount }) => {
	const user = useSelector((state) => state.user);
	const {inventory_id} = useParams()
	const [quantity, setQuantity] = useState(amount)
	console.log("amount product detail: ", amount);
	console.log("inventory id product detail: ", inventory_id);
	console.log("quantity product detail: ", quantity);

	// useEffect(() => {
	//   setQuantity(amount)
	
	// }, [amount])
	
	return (
		<button
			type="button"
			disabled={amount === 0 || !user?.hasLogged}
			onClick={() => {
					addProducts(inventory_id, amount)
					console.log("quantity onClick: ", quantity)
					console.log("amount onClick: ", amount)
					console.log("inventoryid onClick: ", inventory_id)
				}}
			className="bg-green-200 text-white font-semibold px-12 py-4 rounded-xl disabled:opacity-50 lg:w-full lg:px-0 lg:py-1.5 lg:rounded-lg"
		>
			Add To Cart
		</button>
	);
};

export default DesktopAddToCart;
