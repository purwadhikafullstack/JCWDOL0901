import React from "react";

const Price = ({ product }) => {
	return (
		<div>
			<span className="text-lg font-medium text-left text-green-300 truncate w-full">
				Rp {product.price.toLocaleString("id")}
			</span>
		</div>
	);
};

export default Price;
