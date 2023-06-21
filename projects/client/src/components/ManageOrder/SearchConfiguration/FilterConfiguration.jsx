import React from "react";
import DropDown from "../../DropDown";
import { getFilterBy, getStatuses } from "../handlers/manageOrderHandler";

const FilterConfiguration = ({ filterBy, setFilterBy, filter, setFilter }) => {
	return (
		<div className="flex flex-col h-full w-[30%]">
			<span className="material-symbols-rounded mb-2.5">filter_list</span>
			<div className="flex flex-col justify-around w-full lg:flex-row">
				<div className="flex mb-2 justify-center w-full lg:w-[45%] lg:mb-0">
					<DropDown data={filterBy} setter={setFilterBy} getter={getFilterBy} />
				</div>
				<div className="flex justify-center w-full lg:w-[45%]">
					<DropDown data={filter} setter={setFilter} getter={getStatuses} />
				</div>
			</div>
		</div>
	);
};

export default FilterConfiguration;
