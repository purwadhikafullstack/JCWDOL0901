import React from "react";
import FilterConfiguration from "./SearchConfiguration/FilterConfiguration";
import Reset from "./SearchConfiguration/Reset.jsx";
import SortConfiguration from "./SearchConfiguration/SortConfiguration.jsx";
import { resetSetting } from "./handlers/productPromoHandler.js";

const SearchConfiguration = ({ filter, setFilter, sort, setSort, order, setOrder, setPage }) => {
	return (
		<div className="flex flex-row w-full justify-between mb-4 p-4 rounded-xl z-50 sm:mb-10">
			<div className="flex flex-col h-full w-[40%]">
				<FilterConfiguration filter={filter} setFilter={setFilter} />
			</div>
			<SortConfiguration sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
			<Reset onClick={() => resetSetting(setFilter, setSort, setOrder, setPage)} />
		</div>
	);
};

export default SearchConfiguration;
