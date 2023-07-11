import React from "react";
import DropDown from "../DropDown";
import { getCategoryOrder, getCategorySortBy } from "./handlers/categoryHandler";

const SearchSort = ({ sort, setSort, order, setOrder }) => {
	return (
		<div className="flex flex-col w-80">
			<span className="material-symbols-rounded mb-2">sort</span>
			<div className="flex gap-2">
				<DropDown data={sort} setter={setSort} getter={getCategorySortBy} />
				<DropDown data={order} setter={setOrder} getter={getCategoryOrder} />
			</div>
		</div>
	);
};

export default SearchSort;
