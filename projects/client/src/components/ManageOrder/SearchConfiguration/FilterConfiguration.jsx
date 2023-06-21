import React from "react";
import DropDown from "../../DropDown";
import { getBranches, getFilterBy, getStatuses, getVouchers } from "../handlers/manageOrderHandler";
import DisabledDropDown from "../../DisabledDropDown";

const Filter = ({ filterBy, filter, setFilter }) => {
	React.useState(() => {
		setFilter("");
	}, [filterBy.id]);

	if (filterBy.id === "voucher_id") {
		return <DropDown data={filter} setter={setFilter} getter={getVouchers} />;
	} else if (filterBy.id === "status_id") {
		return <DropDown data={filter} setter={setFilter} getter={getStatuses} />;
	} else if (filterBy.id === "branch_id") {
		return <DropDown data={filter} setter={setFilter} getter={getBranches} />;
	}
	return <DisabledDropDown />;
};

const FilterConfiguration = ({ filterBy, setFilterBy, filter, setFilter }) => {
	return (
		<div className="flex flex-col h-full w-[30%]">
			<span className="material-symbols-rounded mb-2.5">filter_list</span>
			<div className="flex flex-col justify-around w-full lg:flex-row">
				<div className="flex mb-2 justify-center w-full lg:w-[45%] lg:mb-0">
					<DropDown data={filterBy} setter={setFilterBy} getter={getFilterBy} />
				</div>
				<div className="flex justify-center w-full lg:w-[45%]">
					<Filter filterBy={filterBy} filter={filter} setFilter={setFilter} />
				</div>
			</div>
		</div>
	);
};

export default FilterConfiguration;
