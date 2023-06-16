import React from "react";

const Stock = ({ product }) => {
	return (
		<div className="flex flex-row justify-between text-sm mb-2 hover:underline hover:decoration-green-400">
			<span className="text-gray-400 font-medium">Stock:</span>
			<span className="ml-2 text-[#f47229]">{product.Inventories[0].stock}</span>
		</div>
	);
};

export default Stock;
