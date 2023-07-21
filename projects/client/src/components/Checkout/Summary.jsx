import React from "react";
import { useSelector } from "react-redux";
import { toCurrency } from "../../helper/currency";

const Subtotal = ({ summary }) => {
	return (
		<div className="grid grid-cols-8 gap-2 font-normal text-left">
			<span className="col-start-2 sm:col-start-4 col-span-3 sm:col-span-2">Subtotal:</span>
			<span className="col-start-6 sm:col-start-7 col-span-3 sm:col-span-2 text-right">
				{toCurrency(summary?.raw?.subtotal)}
			</span>
		</div>
	);
};

const Logistic = ({ summary }) => {
	return (
		<div className="grid grid-cols-8 gap-2 font-normal my-1 text-left">
			<span className="col-start-2 sm:col-start-4 col-span-3 sm:col-span-2">Logistic fee:</span>
			<span className="col-start-6 sm:col-start-7 col-span-3 sm:col-span-2 text-right">
				{" "}
				{toCurrency(summary?.raw?.logistic)}
			</span>
		</div>
	);
};

const Discount = ({ summary }) => {
	return (
		<div className="grid grid-cols-8 gap-2 font-normal whitespace-nowrap text-left">
			<span className="col-start-2 sm:col-start-4 col-span-3 sm:col-span-2">Voucher Discount:</span>
			<span className="col-start-6 sm:col-start-7 col-span-3 sm:col-span-2 text-right text-red">
				{" "}
				{summary?.discount ? `- ${toCurrency(summary?.discount)}` : `${toCurrency(0)}`}
			</span>
		</div>
	);
};

const Total = ({ summary }) => {
	return (
		<div className="grid grid-cols-8 gap-2 text-green-400 py-2 mt-3 font-bold text-left">
			<span className="col-start-2 sm:col-start-4 col-span-3 sm:col-span-2">Total:</span>
			<span className="col-start-6 sm:col-start-7 col-span-3 sm:col-span-2 text-right">
				{toCurrency(summary?.total)}
			</span>
		</div>
	);
};

const Summary = () => {
	const summary = useSelector((state) => state.checkout.summary);

	return (
		summary && (
			<div className="flex flex-col mb-2 mt-8 ml-auto mr-10">
				<Subtotal summary={summary} />
				<Logistic summary={summary} />
				<Discount summary={summary} />
				<Total summary={summary} />
			</div>
		)
	);
};

export default Summary;
