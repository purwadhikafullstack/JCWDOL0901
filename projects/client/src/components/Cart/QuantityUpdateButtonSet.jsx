import React from "react";
import { handleDecrement, handleIncrement } from "./handlers/CartHandler.js";

const Decrement = ({ inventory_id, amount, stock, setIsUpdate  }) => {
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
	console.log("qty btn set invtryId: ", inventory_id);

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
		<div className="flex flex-row w-fit items-center text-green-300 mr-auto">
			<Decrement inventory_id={inventory_id} amount={amount} stock={stock} setIsUpdate={setIsUpdate} />
			<div className="flex justify-center items-center bg-green-50 px-2 py-2 rounded-xl mx-3 font-medium text-md box-border w-10 h-10 text-center">
				<span className="h-fit">{amount}</span>
			</div>
			<Increment inventory_id={inventory_id} amount={amount} stock={stock} setIsUpdate={setIsUpdate} />
			<span className="text-[#f47229] ml-4 font-semibold">{stock - amount} left</span>
		</div>
	);
};

export default QuantityUpdateButtonSet;
