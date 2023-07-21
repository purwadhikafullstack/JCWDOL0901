import React from "react";

const CartHeader = ({ Content }) => {
	return (
		<div className="grid grid-cols-7 gap-2 bg-green-200 text-green-100 py-2 font-medium sm:rounded-t-xl">
			<Content />
		</div>
	);
};

export default CartHeader;
