import React from "react";
import { handleDecrement, handleIncrement } from "../../handlers/ProductDetailHandler";

const Decrement = ({ setAmount, amount }) => {
	return (
		<button
			className="border border-green-300 px-2 rounded-lg h-fit disabled:border-gray-300 disabled:text-gray-300 disabled:opacity-50"
			disabled={amount === 0}
			onClick={() => handleDecrement(setAmount)}
		>
			–
		</button>
	);
};

const Increment = ({ setAmount, amount, stock }) => {
	return (
		<button
			className="border border-green-300 px-2 rounded-lg h-fit disabled:border-gray-300 disabled:text-gray-300 disabled:opacity-50"
			disabled={amount === stock}
			onClick={() => handleIncrement(setAmount, stock)}
		>
			+
		</button>
	);
};

const DesktopButtonSet = ({ amount, setAmount, stock }) => {
	return (
		<div className="flex flex-row w-fit items-center text-green-300 mr-auto">
			<Decrement setAmount={setAmount} amount={amount} />
			<div className="flex justify-center items-center bg-green-50 px-2 py-2 rounded-xl mx-3 font-medium text-md box-border w-10 h-10 text-center">
				<span className="h-fit">{amount}</span>
			</div>
			<Increment setAmount={setAmount} amount={amount} stock={stock} />
			<span className="text-[#f47229] ml-4 font-semibold">{stock - amount} left</span>
		</div>
	);
};

export default DesktopButtonSet;
