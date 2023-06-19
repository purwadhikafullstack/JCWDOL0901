import React from "react";
import DropDown from "../DropDown";
import { getProductsOrder, getProductsSortBy } from "./handlers/ProductsHandler";

const SearchSort = ({ sort, setSort, order, setOrder }) => {
	return (
		<div className="flex flex-col w-80">
			<span className="material-symbols-rounded mb-2">sort</span>
			<div className="flex gap-2">
				<DropDown data={sort} setter={setSort} getter={getProductsSortBy} />
				<DropDown data={order} setter={setOrder} getter={getProductsOrder} />
			</div>
		</div>
	);
};

export default SearchSort;
