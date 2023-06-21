import React from "react";
import NameConfiguration from "./SearchConfiguration/NameConfiguration";
import ResetButton from "./SearchConfiguration/ResetButton";
import FilterConfiguration from "./SearchConfiguration/FilterConfiguration";
import SortConfiguration from "./SearchConfiguration/SortConfiguration";

const SearchConfiguration = ({ setName, filterBy, setFilterBy, filter, setFilter, sort, setSort, order, setOrder }) => {
	return (
		<>
			<div className="flex flex-row w-full justify-around mb-4 p-4 rounded-t-xl z-50 sm:mb-10">
				<NameConfiguration setName={setName} />
				<FilterConfiguration
					filterBy={filterBy}
					setFilterBy={setFilterBy}
					filter={filter}
					setFilter={setFilter}
				/>
				<SortConfiguration sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
				<ResetButton />
			</div>
		</>
	);
};

export default SearchConfiguration;
