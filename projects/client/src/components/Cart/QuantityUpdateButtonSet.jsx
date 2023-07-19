import React from "react";
import { handleDecrement, handleIncrement } from "./handlers/CartHandler.js";

const Decrement = ({ inventory_id, amount, stock, setIsUpdate }) => {
	return (
		<button
			className="border border-green-300 px-2 rounded-lg h-fit disabled:border-gray-300 disabled:text-gray-300 disabled:opacity-50"
			disabled={amount === 0}
			onClick={() => handleDecrement(inventory_id, amount, stock, setIsUpdate)}
		>
			–
		</button>
	);
};

const Increment = ({ inventory_id, amount, stock, setIsUpdate }) => {
	return (
		<button
			className="border border-green-300 px-2 rounded-lg h-fit disabled:border-gray-300 disabled:text-gray-300 disabled:opacity-50"
			disabled={amount === stock}
			onClick={() => handleIncrement(inventory_id, amount, stock, setIsUpdate)}
		>
			+
		</button>
	);
};

const QuantityUpdateButtonSet = ({ amount, inventory_id, stock, setIsUpdate }) => {
	return (
		<div className="flex flex-col sm:flex-row w-fit items-start text-green-300 mr-auto my-2">
			<div className="flex flex-row items-center">
				<Decrement inventory_id={inventory_id} amount={amount} stock={stock} setIsUpdate={setIsUpdate} />
				<div className="flex justify-center items-center bg-green-50 px-2 py-2 rounded-xl mx-3 font-medium text-sm sm:text-md box-border w-8 sm:w-10 h-8 sm:h-10 text-center">
					<span className="h-fit">{amount}</span>
				</div>
				<Increment inventory_id={inventory_id} amount={amount} stock={stock} setIsUpdate={setIsUpdate} />
			</div>
			<span className="text-[#f47229] sm:ml-4 font-semibold text-xs sm:text-base">{stock - amount} left</span>
		</div>
	);
};

export default QuantityUpdateButtonSet;
