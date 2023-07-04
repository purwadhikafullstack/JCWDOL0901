import React from "react";
import FilterConfiguration from "./SearchConfiguration/FilterConfiguration";
import NameConfiguration from "./SearchConfiguration/NameConfiguration";
import Reset from "./SearchConfiguration/Reset";
import SortConfiguration from "./SearchConfiguration/SortConfiguration";
import { resetSetting } from "./handlers/ProductStockHandler";
import DateConfiguration from "../ManageOrder/SearchConfiguration/DateConfiguration";

const SearchConfiguration = ({
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
				<NameConfiguration setName={setName} />
				<FilterConfiguration
					filterBy={filterBy}
					setFilterBy={setFilterBy}
					filter={filter}
					setFilter={setFilter}
				/>
				<SortConfiguration sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
				<Reset onClick={() => resetSetting(setName, setFilterBy, setFilter, setSort, setOrder, setPage)} />
			</div>
		</>
	);
};

export default SearchConfiguration;
