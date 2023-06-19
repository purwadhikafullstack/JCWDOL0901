import React from "react";
import DropDown from "../../DropDown.jsx";
import { getPromotionsType } from "../handlers/productPromoHandler.js";

const SearchFilter = ({ filter, setFilter }) => {
	return (
		<div className="flex flex-col h-full w-[25%]">
			<span className="material-symbols-rounded mb-2.5">filter_list</span>
			<DropDown data={filter} setter={setFilter} getter={getPromotionsType} />
		</div>
	);
};

export default SearchFilter;
