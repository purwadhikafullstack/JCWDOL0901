import React, { useEffect, useRef } from "react";
import DropDown from "../DropDown";
import {
	getProductsFilterByCategory,
	getProductsFilterByStatus,
	getProductsFilterBy,
} from "./handlers/productsHandler";

const SearchFilter = ({ setFilterBy, setFilter, filterBy, filter }) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) setFilter("");
		else didMount.current = true;
	}, [filterBy.id]);
	return (
		<div className="flex flex-col sm:flex-row gap-6 sm:gap-2 pb-16 sm:pb-12">
			<div className="flex flex-col w-60 gap-3 text-left mx-10 sm:mx-2">
				<h3>Filter by:</h3>
				<DropDown data={filterBy} setter={setFilterBy} getter={getProductsFilterBy} />
			</div>
			<div className="flex flex-col w-60 gap-3 text-left mx-10 sm:mx-2">
				<h3>Direction:</h3>
				{filterBy?.id == "category_id" ? (
					<DropDown data={filter} setter={setFilter} getter={() => getProductsFilterByCategory(filterBy)} />
				) : null}
				{filterBy?.id == "active" ? (
					<DropDown data={filter} setter={setFilter} getter={() => getProductsFilterByStatus(filterBy)} />
				) : null}
			</div>
		</div>
	);
};

export default SearchFilter;
