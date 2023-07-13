import React from "react";
import DropDown from "../../DropDown";
import { getFilterBy, getFilterOfDescription } from "../handlers/SalesReportHandler";
import DisabledDropDown from "../../DisabledDropDown";

const Filter = ({ filterBy, filter, setFilter }) => {
	React.useEffect(() => {
		setFilter("");
	}, [filterBy?.id]);

	if (filterBy?.id === "description") {
		return <DropDown data={filter} setter={setFilter} getter={getFilterOfDescription} />;
	}

	return <DisabledDropDown />;
};

const FilterConfiguration = ({ filterBy, setFilterBy, filter, setFilter }) => {
	return (
		<div className="flex flex-col w-[30%]">
			<span className="material-symbols-rounded mb-2.5">filter_list</span>
			<div className="flex flex-col justify-around w-full lg:flex-row">
				<div className="flex justify-center w-full lg:w-[45%]">
					<DropDown data={filterBy} setter={setFilterBy} getter={getFilterBy} />
				</div>
				<div className="flex mt-2 justify-center w-full lg:w-[45%] lg:mt-0">
					<Filter filterBy={filterBy} filter={filter} setFilter={setFilter} />
				</div>
			</div>
		</div>
	);
};

export default FilterConfiguration;
