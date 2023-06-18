import React from "react";

const Summary = ({ cart }) => {
	return (
		<div className="flex flex-col my-4 ml-auto mr-6">
			<div className="grid grid-cols-8 gap-2 py-2 font-normal text-left">
				<span className="col-start-5 col-span-2">Subtotal:</span>
				<span className="col-start-7 col-span-2">Rp 123.456</span>
			</div>
			<div className="grid grid-cols-8 gap-2 font-normal text-left">
				<span className="col-start-5 col-span-2">Logistic fee:</span>
				<span className="col-start-7 col-span-2"> Rp 123.456</span>
			</div>
			<div className="grid grid-cols-8 gap-2 text-green-400 py-2 mt-2 font-bold text-left">
				<span className="col-start-5 col-span-2">Total:</span>
				<span className="col-start-7 col-span-2">Rp 246.912</span>
			</div>
		</div>
	);
};

export default Summary;
