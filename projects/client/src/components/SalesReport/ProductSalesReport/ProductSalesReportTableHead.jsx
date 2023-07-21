import React from "react";

const ProductSalesReportTableHead = () => {
	return (
		<thead className="uppercase">
			<tr className="text-center text-sm sm:text-base">
				<th className={"py-4 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>No.</th>
				<th className={"py-4 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>Product's Name</th>
				<th className={"py-4 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>Qty</th>
			</tr>
		</thead>
	);
};

export default ProductSalesReportTableHead;
