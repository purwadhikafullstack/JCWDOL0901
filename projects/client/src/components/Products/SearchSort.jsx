import React from "react";
import DropDown from "../DropDown";
import { getProductsOrder, getProductsSortBy } from "./handlers/ProductsHandler";

const SearchSort = ({ sort, setSort, order, setOrder }) => {
	return (
		<div className="flex flex-col sm:flex-row gap-16 sm:gap-2 pb-16 sm:pb-12">
			<div className="flex flex-col w-80 sm:w-48 gap-3 text-left mx-2">
				<h3>Sort by:</h3>
				<DropDown data={sort} setter={setSort} getter={getProductsSortBy} />
			</div>
			<div className="flex flex-col w-80 sm:w-48 gap-3 text-left mx-2">
				<h3>Direction:</h3>
				<DropDown data={order} setter={setOrder} getter={getProductsOrder} />
			</div>
		</div>
	);
};

export default SearchSort;
