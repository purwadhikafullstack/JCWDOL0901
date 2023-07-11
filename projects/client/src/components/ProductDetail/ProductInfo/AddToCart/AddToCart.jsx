import React from "react";
import { useSelector } from "react-redux";

const DesktopAddToCart = ({ amount }) => {
	const user = useSelector((state) => state.user);
	return (
		<button
			type="button"
			disabled={amount === 0 || !user?.hasLogged}
			className="bg-green-200 text-white font-semibold px-12 py-4 rounded-xl disabled:opacity-50 lg:w-full lg:px-0 lg:py-1.5 lg:rounded-lg"
		>
			Add To Cart
		</button>
	);
};

export default DesktopAddToCart;
