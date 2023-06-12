import React from "react";
import DropDown from "../DropDown.jsx";
import { getPromotionsType } from "./handlers/productPromoHandler.js";

const SearchFilter = ({ filter, setFilter }) => {
	return (
		<div className="flex flex-col w-[40%]">
			<span className="material-symbols-rounded mb-2">filter_list</span>
			<DropDown data={filter} setter={setFilter} getter={getPromotionsType} />
		</div>
	);
};

export default SearchFilter;
