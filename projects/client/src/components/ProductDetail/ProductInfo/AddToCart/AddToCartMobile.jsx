import React from "react";
import MobileButtonSet from "./MobileButtonSet.jsx";
import AddToCart from "./AddToCart.jsx";

const AddToCartMobile = ({ stock, amount, setAmount }) => {
	return (
		<div
			tabIndex="-1"
			className="fixed bottom-0 mx-auto z-50 w-[480px] rounded-3xl mb-2 inset-x-0 bg-white lg:hidden"
		>
			<div className="flex flex-row py-6 w-full border border-green-200 justify-around mt-auto rounded-3xl">
				<MobileButtonSet stock={stock} amount={amount} setAmount={setAmount} />
				<AddToCart />
			</div>
		</div>
	);
};

export default AddToCartMobile;
