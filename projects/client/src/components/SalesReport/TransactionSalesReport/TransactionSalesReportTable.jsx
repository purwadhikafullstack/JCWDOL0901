import React from "react";

import TransactionSalesReportTableHead from "./TransactionSalesReportTableHead.jsx";
import TransactionSalesReportTableBody from "./TransactionSalesReportTableBody.jsx";

const TransactionSalesReportTable = ({ sort, order, page, setMaxPage, startDate, endDate, itemPerPage }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border border-green-300 border-2 mx-6">
			<table className="w-full">
				<TransactionSalesReportTableHead />
				<TransactionSalesReportTableBody
					sort={sort}
					order={order}
					page={page}
					setMaxPage={setMaxPage}
					startDate={startDate}
					endDate={endDate}
					itemPerPage={itemPerPage}
				/>
			</table>
		</div>
	);
};

export default TransactionSalesReportTable;
