import React from "react";
import ProductSalesReportTableHead from "./ProductSalesReportTableHead.jsx";
import ProductSalesReportTableBody from "./ProductSalesReportTableBody.jsx";

const ProductSalesReportTable = ({ name, filterBy, filter, sort, order, page, setMaxPage, startDate, endDate }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border border-green-300 border-2 mx-6">
			<table className="w-full">
				<ProductSalesReportTableHead />

				<ProductSalesReportTableBody
					name={name}
					filterBy={filterBy}
					filter={filter}
					sort={sort}
					order={order}
					page={page}
					setMaxPage={setMaxPage}
					startDate={startDate}
					endDate={endDate}
				/>
			</table>
		</div>
	);
};

export default ProductSalesReportTable;
