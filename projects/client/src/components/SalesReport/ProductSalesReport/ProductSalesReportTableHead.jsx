import React from "react";

const ProductSalesReportTableHead = () => {
	const thClassName = "py-6 bg-green-500 text-green-100 px-10 whitespace-nowrap";
	return (
		<thead className="uppercase">
			<tr className="text-center">
				<th className={"py-6 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>No.</th>
				<th className={"py-6 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>Product's Name</th>
				<th className={"py-6 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>Quantity</th>
			</tr>
		</thead>
	);
};

export default ProductSalesReportTableHead;
