import React from "react";

import TransactionSalesReportTableHead from "./TransactionSalesReportTableHead.jsx";
import TransactionSalesReportTableBody from "./TransactionSalesReportTableBody.jsx";

const TransactionSalesReportTable = ({ name, filterBy, filter, sort, order, page, setMaxPage, startDate, endDate }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border border-green-300 border-2 mx-6">
			<table className="w-full">
				<TransactionSalesReportTableHead />
				<TransactionSalesReportTableBody
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
