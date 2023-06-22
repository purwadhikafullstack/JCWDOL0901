import React, { useEffect } from "react";
import DropDown from "../DropDown";
import { getOrderByName, getOrderByPrice, getProductsSortBy } from "./handlers/ProductsHandler";

const SearchSort = ({ sort, setSort, order, setOrder }) => {
	useEffect(() => {
		setOrder("");
		console.log(sort, order);
	}, [sort]);
	return (
		<div className="flex flex-col sm:flex-row gap-16 sm:gap-2 pb-16 sm:pb-12">
			<div className="flex flex-col w-80 sm:w-48 gap-3 text-left mx-2">
				<h3>Sort by:</h3>
				<DropDown data={sort} setter={setSort} getter={getProductsSortBy} />
			</div>
			<div className="flex flex-col w-80 sm:w-48 gap-3 text-left mx-2">
				<h3>Direction:</h3>
				{sort.id == "name" ? (
					<DropDown data={order} setter={setOrder} getter={() => getOrderByName(sort)} />
				) : null}
				{sort.id == "price" ? (
					<DropDown data={order} setter={setOrder} getter={() => getOrderByPrice(sort)} />
				) : null}
			</div>
		</div>
	);
};

export default SearchSort;
