import React from "react";
import DropDown from "../../DropDown";
import { getCategories, getFilterBy } from "../handlers/ProductStockHandler";

const Icon = () => {
	return (
		<div className="self-center ml-4 mb-1">
			<span class="material-symbols-rounded">filter_list</span>
		</div>
	);
};

const FilterConfiguration = ({ filterBy, setFilterBy, filter, setFilter }) => {
	return (
		<div className="flex flex-col w-[25%]">
			<Icon />
			<div className="flex flex-col justify-around w-full lg:flex-row">
				<div className="flex justify-center w-[45%]">
					<DropDown data={filterBy} setter={setFilterBy} getter={getFilterBy} />
				</div>
				{filterBy?.id === "category_id" && (
					<div className="flex justify-center w-[45%]">
						<DropDown data={filter} setter={setFilter} getter={getCategories} />
					</div>
				)}
			</div>
		</div>
	);
};

export default FilterConfiguration;
