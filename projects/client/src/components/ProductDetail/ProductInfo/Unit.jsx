import React from "react";

const Unit = ({ product }) => {
	return (
		<>
			<div className="flex flex-row justify-between text-sm mb-2 hover:underline hover:decoration-green-400">
				<span className="text-gray-400 font-medium">Unit:</span>
				<span className="ml-2 text-[#f47229]">{product.unit}</span>
			</div>
			<div className="flex flex-row justify-between text-sm hover:underline hover:decoration-green-400">
				<span className="text-gray-400 font-medium">Weight:</span>
				<span className="ml-2 text-[#f47229]">{product.weight} g</span>
			</div>
		</>
	);
};

export default Unit;
