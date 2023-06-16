import React from "react";
import { handleDecrement, handleIncrement } from "../../handlers/ProductDetailHandler";

const AddToCartMobile = ({ stock, amount, setAmount }) => {
	return (
		<div
			tabIndex="-1"
			className="fixed bottom-0 mx-auto z-50 w-[480px] rounded-3xl mb-2 inset-x-0 bg-white lg:hidden"
		>
			<div className="flex flex-row py-6 w-full border border-green-200 justify-around mt-auto rounded-3xl">
				<div className="flex flex-row w-fit items-center text-green-300">
					<button
						className="border border-green-300 px-3 py-1 rounded-lg h-fit disabled:border-gray-300 disabled:text-gray-300 disabled:opacity-50"
						disabled={amount === 0}
						onClick={() => handleDecrement(setAmount)}
					>
						–
					</button>
					<div className="flex justify-center items-center bg-green-50 px-5 py-3 rounded-xl mx-3 font-semibold text-lg box-border w-14 h-14 text-center">
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

				<button
					type="button"
					disabled={amount === 0}
					className="bg-green-200 text-white font-semibold px-12 py-4 rounded-xl disabled:opacity-50"
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default AddToCartMobile;
