import React from "react";
import DateConfiguration from "../../ManageOrder/SearchConfiguration/DateConfiguration";
import Reset from "../SearchConfiguration/Reset";
import { resetSetting } from "../handlers/SalesReportHandler";
import SortConfiguration from "../SearchConfiguration/SortConfiguration";
import SortTotalSpendingConfiguration from "../SearchConfiguration/SortTotalSpendingConfiguration";

const UserSalesReportSearchConfiguration = ({
	setName,
	filterBy,
	setFilterBy,
	filter,
	setFilter,
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
				{/* <NameConfiguration setName={setName} /> */}
				<SortTotalSpendingConfiguration
					filterBy={filterBy}
					setFilterBy={setFilterBy}
					filter={filter}
					setFilter={setFilter}
					setOrder={setOrder}
				/>
				<SortConfiguration sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
				{/* <SortConfiguration sort={sort} setSort={setSort} order={order} setOrder={setOrder} /> */}
				<Reset onClick={() => resetSetting(setName, setFilterBy, setFilter, setSort, setOrder, setPage)} />
			</div>
		</>
	);
};

export default UserSalesReportSearchConfiguration;
