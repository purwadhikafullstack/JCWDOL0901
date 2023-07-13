import React from "react";

const SalesReportTableHead = () => {
	const thClassName = "py-6 bg-green-500 text-green-100 px-10 whitespace-nowrap";
	return (
		<thead className="uppercase">
			<tr className="text-center">
				<th className={thClassName}>Product's Name</th>
				<th className={thClassName}>Quantity</th>
			</tr>
		</thead>
	);
};

export default SalesReportTableHead;
