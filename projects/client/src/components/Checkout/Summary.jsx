import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
	const summary = useSelector((state) => state.checkout.summary);
	return (
		<div className="flex flex-col my-4 ml-auto mr-6">
			<div className="grid grid-cols-8 gap-2 py-2 font-normal text-left">
				<span className="col-start-5 col-span-2">Subtotal:</span>
				<span className="col-start-7 col-span-2">Rp {summary.subtotal.toLocaleString("id")}</span>
			</div>
			<div className="grid grid-cols-8 gap-2 font-normal text-left">
				<span className="col-start-5 col-span-2">Logistic fee:</span>
				<span className="col-start-7 col-span-2"> Rp {summary.logistic.toLocaleString("id")}</span>
			</div>
			<div className="grid grid-cols-8 gap-2 text-green-400 py-2 mt-2 font-bold text-left">
				<span className="col-start-5 col-span-2">Total:</span>
				<span className="col-start-7 col-span-2">Rp {summary.total.toLocaleString("id")}</span>
			</div>
		</div>
	);
};

export default Summary;
