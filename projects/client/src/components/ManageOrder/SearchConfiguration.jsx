import React from "react";
import NameConfiguration from "./SearchConfiguration/NameConfiguration";
import ResetButton from "./SearchConfiguration/ResetButton";
import FilterConfiguration from "./SearchConfiguration/FilterConfiguration";
import SortConfiguration from "./SearchConfiguration/SortConfiguration";
import DateConfiguration from "./SearchConfiguration/DateConfiguration";
import { resetSetting } from "./handlers/manageOrderHandler";

const SearchConfiguration = ({
	startDate,
	setStartDate,
	endDate,
	setEndDate,
	name,
	setName,
	filterBy,
	setFilterBy,
	filter,
	setFilter,
	sort,
	setSort,
	order,
	setOrder,
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
				<NameConfiguration setName={setName} name={name} />
				<FilterConfiguration
					filterBy={filterBy}
					setFilterBy={setFilterBy}
					filter={filter}
					setFilter={setFilter}
				/>
				<SortConfiguration sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
				<ResetButton
					onClick={() =>
						resetSetting(setStartDate, setEndDate, setName, setFilterBy, setFilter, setSort, setOrder)
					}
				/>
			</div>
		</>
	);
};

export default SearchConfiguration;
