import React from "react";

import SalesReportTableHead from "../SalesTable/SalesReportTableHead.jsx";
import SalesReportTableBody from "../SalesTable/SalesReportTableBody.jsx";

const TransactionSalesReportTable = ({ name, filterBy, filter, sort, order, page, setMaxPage, startDate, endDate }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border border-green-300 border-2 mx-6">
			<table className="w-full">
				<SalesReportTableHead />
				<SalesReportTableBody
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

export default TransactionSalesReportTable;
