import React from "react";
import DateConfiguration from "../../ManageOrder/SearchConfiguration/DateConfiguration";
import Reset from "../SearchConfiguration/Reset";
import { resetSetting } from "../handlers/SalesReportHandler";
import TransactionSalesReportSortConfiguration from "./TransactionSalesReportSortConfiguration";

const TransactionSalesReportSearchConfiguration = ({
	sort,
	setSort,
	order,
	setOrder,
	setPage,
	startDate,
	setStartDate,
	endDate,
	setEndDate,
}) => {
	return (
		<>
			<div className="flex flex-row w-full justify-between z-50">
				<DateConfiguration
					startDate={startDate}
					setStartDate={setStartDate}
					endDate={endDate}
					setEndDate={setEndDate}
				/>
			</div>
			<div className="flex flex-row w-full justify-between mb-4 p-4 px-6 rounded-t-xl z-50 sm:mb-10">
				<TransactionSalesReportSortConfiguration
					sort={sort}
					setSort={setSort}
					order={order}
					setOrder={setOrder}
				/>
				<Reset onClick={() => resetSetting(setStartDate, setEndDate, setSort, setOrder, setPage)} />
			</div>
		</>
	);
};

export default TransactionSalesReportSearchConfiguration;
