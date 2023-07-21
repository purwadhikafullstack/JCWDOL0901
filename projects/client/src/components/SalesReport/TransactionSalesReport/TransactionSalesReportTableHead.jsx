import React from "react";

const TransactionSalesReportTableHead = () => {
	const thClassName = "py-6 bg-green-500 text-green-100 px-10 whitespace-nowrap";
	return (
		<thead className="uppercase">
			<tr className="text-center text-sm sm:text-base">
				<th className={"py-4 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>No.</th>
				<th className={"py-4 bg-green-500 text-green-100 px-1 "}>Transaction's Amount</th>
				<th className={"py-4 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>Date Time</th>
			</tr>
		</thead>
	);
};

export default TransactionSalesReportTableHead;
