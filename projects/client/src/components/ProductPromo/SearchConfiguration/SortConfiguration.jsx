import React from "react";
import DropDown from "../../DropDown";
import { getPromotionsOrder, getPromotionsSortBy } from "../handlers/productPromoHandler";

const SearchSort = ({ sort, setSort, order, setOrder }) => {
	React.useEffect(() => {
		setOrder("");
	}, [sort.id]);

	return (
		<div className="flex flex-col w-[25%]">
			<span className="material-symbols-rounded mb-2.5">sort</span>
			<div className="flex flex-col items-center lg:justify-around lg:items-center lg:flex-row">
				<div className="w-full mb-2 lg:w-[45%] lg:mb-0">
					<DropDown data={sort} setter={setSort} getter={getPromotionsSortBy} />
				</div>
				<div className="w-full lg:w-[45%]">
					<DropDown data={order} setter={setOrder} getter={getPromotionsOrder} />
				</div>
			</div>
		</div>
	);
};

export default SearchSort;
