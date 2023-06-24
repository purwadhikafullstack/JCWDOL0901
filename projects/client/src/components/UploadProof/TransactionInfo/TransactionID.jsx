import React from "react";

const TransactionID = ({ transaction }) => {
	return (
		<div className="flex flex-col mx-auto px-8">
			<span className="font-semibold flex flex-row items-center">
				<span className="material-symbols-rounded text-base lg:text-xl">receipt_long</span>
				<span className="ml-1 text-base whitespace-nowrap lg:text-xl">Transaction ID:</span>
			</span>
			<span className="text-green-300 font-bold text-left text-lg ml-2 mt-1 text-base lg:text-xl">
				#{transaction.id}
			</span>
		</div>
	);
};

export default TransactionID;
