import React from "react";
import { getDueDate } from "../handler/uploadPaymentProofHandler";

const TransactionDate = ({ transaction }) => {
	return (
		<div className="flex flex-col mx-auto px-8">
			<span className="font-semibold flex flex-row items-center whitespace-nowrap">
				<span className="material-symbols-rounded text-base lg:text-xl">pace</span>
				<span className="ml-1 text-base lg:text-xl">Due Date:</span>
			</span>
			<span className="text-red font-semibold text-left text-base ml-2 mt-1 text-sm whitespace-nowrap lg:text-xl">
				{getDueDate(transaction.created_at)}
			</span>
		</div>
	);
};

export default TransactionDate;
