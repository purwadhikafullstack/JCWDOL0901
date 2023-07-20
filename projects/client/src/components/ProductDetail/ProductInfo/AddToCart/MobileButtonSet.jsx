import React from "react";
import { handleDecrement, handleIncrement } from "../../handlers/ProductDetailHandler.js";

const MobileButtonSet = ({ amount, setAmount, stock }) => {
	return (
		<div className="flex flex-row w-fit items-center text-green-300">
			<button
				className="border border-green-300 px-3 py-1 rounded-lg h-fit disabled:border-gray-300 disabled:text-gray-300 disabled:opacity-50"
				disabled={amount === 0}
				onClick={() => handleDecrement(setAmount)}
			>
				–
			</button>
			<div className="flex justify-center items-center bg-green-50 px-5 py-3 rounded-xl mx-3 font-semibold text-sm sm:text-lg box-border w-10 sm:w-14 h-10 sm:h-14 text-center">
				<span className="h-fit">{amount}</span>
			</div>
			<button
				className="border border-green-300 px-3 py-1 rounded-lg h-fit disabled:border-gray-300 disabled:text-gray-300 disabled:opacity-50"
				disabled={amount == stock}
				onClick={() => handleIncrement(setAmount, stock)}
			>
				+
			</button>
		</div>
	);
};

export default MobileButtonSet;
