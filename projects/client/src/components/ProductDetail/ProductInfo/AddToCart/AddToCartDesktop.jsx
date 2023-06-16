import React from "react";
import { handleDecrement, handleIncrement } from "../../handlers/ProductDetailHandler";

const AddToCartDesktop = ({ stock, amount, setAmount, product }) => {
	return (
		<div className="hidden flex-col items-center justify-center p-4 h-fit my-auto mx-auto lg:min-w-[22%] border border-green-200 justify-around rounded-lg lg:flex">
			<span className="font-semibold mr-auto mb-4">Set Amount</span>
			<div className="flex flex-row w-fit items-center text-green-300 mr-auto">
				<button
					className="border border-green-300 px-2 rounded-lg h-fit disabled:border-gray-300 disabled:text-gray-300 disabled:opacity-50"
					disabled={amount === 0}
					onClick={() => handleDecrement(setAmount)}
				>
					–
				</button>
				<div className="flex justify-center items-center bg-green-50 px-2 py-2 rounded-xl mx-3 font-medium text-md box-border w-10 h-10 text-center">
					<span className="h-fit">{amount}</span>
				</div>
				<button
					className="border border-green-300 px-2 rounded-lg h-fit disabled:border-gray-300 disabled:text-gray-300 disabled:opacity-50"
					disabled={amount === stock}
					onClick={() => handleIncrement(setAmount, stock)}
				>
					+
				</button>
				<span className="text-[#f47229] ml-4 font-semibold">{stock - amount} left</span>
			</div>
			<div className="flex flex-row items-center justify-between w-full mt-8 mb-3 px-1">
				<span className="text-gray-300 text-sm mr-auto">Subtotal: </span>
				<span className="text-lg font-bold">Rp{(amount * product.price).toLocaleString("id")}</span>
			</div>

			<button
				type="button"
				disabled={amount === 0}
				className="bg-green-200 text-white font-semibold w-full py-1.5 rounded-lg disabled:opacity-50"
			>
				Add To Cart
			</button>
		</div>
	);
};

export default AddToCartDesktop;
