import React from "react";
import DropDown from "../../DropDown";
import DisabledDropDown from "../../DisabledDropDown";
import { getSalesBy, getFilterBy, getFilterOfDescription } from "../handlers/SalesReportHandler";

// const DisplayBy = ({ filterBy, filter, setFilter }) => {
// 	React.useEffect(() => {
// 		setFilter("");
// 	}, [filterBy?.id]);

// 	if (filterBy?.id === "description") {
// 		return <DropDown data={filter} setter={setFilter} getter={getFilterOfDescription} />;
// 	}

// 	return <DisabledDropDown />;
// };

const DisplayByConfiguration = ({ salesBy, setSalesBy }) => {
	return (
		<div className="flex flex-col w-[30%] mb-20">
			<span className="material-symbols-rounded mb-2.5">gallery_thumbnail</span>
            <p className="text-xs p-2">Display Sales Report By:</p>
			<div className="flex flex-col justify-around w-full lg:flex-row">
				<div className="flex justify-center w-full lg:w-[45%]">
					<DropDown data={salesBy} setter={setSalesBy} getter={getSalesBy} />
				</div>
				{/* <div className="flex mt-2 justify-center w-full lg:w-[45%] lg:mt-0">
					<DisplayBy filterBy={filterBy} filter={filter} setFilter={setFilter} />
				</div> */}
			</div>
		</div>
	);
};

export default DisplayByConfiguration;
