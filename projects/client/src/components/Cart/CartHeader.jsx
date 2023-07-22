import React from "react";

const CartHeader = ({ Content }) => {
	return (
		<div className="grid grid-cols-7 gap-2 bg-green-200 text-green-100 py-6 font-bold text-xl sm:rounded-t-xl pl-2">
			<Content />
		</div>
	);
};

export default CartHeader;
