import React from "react";

const DesktopAddToCart = ({ amount }) => {
	return (
		<button
			type="button"
			disabled={amount === 0}
			className="bg-green-200 text-white font-semibold px-12 py-4 rounded-xl disabled:opacity-50 lg:w-full lg:px-0 lg:py-1.5 lg:rounded-lg"
		>
			Add To Cart
		</button>
	);
};

export default DesktopAddToCart;
