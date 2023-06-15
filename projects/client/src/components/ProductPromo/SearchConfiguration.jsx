import React from "react";
import FilterConfiguration from "./SearchConfiguration/FilterConfiguration";
import Reset from "./SearchConfiguration/Reset.jsx";
import SortConfiguration from "./SearchConfiguration/SortConfiguration.jsx";
import NameConfiguration from "./SearchConfiguration/NameConfiguration.jsx";
import { resetSetting } from "./handlers/productPromoHandler.js";

const SearchConfiguration = ({
	setName,
	filter,
	setFilter,
	sort,
	setSort,
	order,
	setOrder,
	setPage,
}) => {
	return (
		<div className="flex flex-row w-full justify-around mb-4 p-4 rounded-t-xl z-50 sm:mb-10">
			<NameConfiguration setName={setName} />
			<FilterConfiguration filter={filter} setFilter={setFilter} />
			<SortConfiguration sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
			<Reset onClick={() => resetSetting(setFilter, setSort, setOrder, setPage)} />
		</div>
	);
};

export default SearchConfiguration;
