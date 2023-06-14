import React from "react";
import DropDown from "../DropDown";
import { getPromotionsOrder, getPromotionsSortBy } from "./handlers/productPromoHandler";

const SearchSort = ({ sort, setSort, order, setOrder }) => {
	return (
		<div className="flex flex-col w-[30%]">
			<span class="material-symbols-rounded mb-2">sort</span>
			<DropDown data={sort} setter={setSort} getter={getPromotionsSortBy} />
			<DropDown data={order} setter={setOrder} getter={getPromotionsOrder} />
		</div>
	);
};

export default SearchSort;
