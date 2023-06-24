import React from "react";

const TransactionID = ({ transaction }) => {
	return (
		<div className="flex flex-col mx-auto">
			<span className="font-semibold flex flex-row items-center">
				<span className="material-symbols-rounded text-xs lg:text-base">receipt_long</span>
				<span className="ml-1 text-xs whitespace-nowrap lg:text-base">Transaction ID:</span>
			</span>
			<span className="text-green-300 font-bold text-left text-lg ml-2 mt-1 text-xs lg:text-base">
				#{transaction.id}
			</span>
		</div>
	);
};

export default TransactionID;
