import React from "react";
import MobileButtonSet from "./MobileButtonSet.jsx";
import AddToCart from "./AddToCart.jsx";

const AddToCartMobile = ({ stock, amount, setAmount }) => {
	return (
		<div tabIndex="-1" className="z-50 fixed bottom-0 w-full flex justify-center lg:hidden mb-6">
			<div className="flex justify-center">
				<div className="flex flex-row shadow-xl border border-gray-100 py-3 sm:py-6 w-full justify-around mt-auto rounded-3xl gap-4 px-4 sm:px-6 bg-white">
					<MobileButtonSet stock={stock} amount={amount} setAmount={setAmount} />
					<AddToCart amount={amount} />
				</div>
			</div>
		</div>
	);
};

export default AddToCartMobile;
