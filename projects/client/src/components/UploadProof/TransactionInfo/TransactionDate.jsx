import React from "react";
import { getDueDate } from "../handler/uploadPaymentProofHandler";

const TransactionDate = ({ transaction }) => {
	return (
		<div className="flex flex-col mx-auto lg:px-6">
			<span className="font-semibold flex flex-row items-center">
				<span className="material-symbols-rounded text-xs lg:text-base">pace</span>
				<span className="ml-1 text-xs lg:text-base">Due Date:</span>
			</span>
			<span className="text-red font-semibold text-left text-xs ml-2 mt-1 text-sm lg:text-base">
				{getDueDate(transaction.created_at)}
			</span>
		</div>
	);
};

export default TransactionDate;
