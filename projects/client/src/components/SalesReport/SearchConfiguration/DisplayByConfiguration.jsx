import React from "react";
import DropDown from "../../DropDown";
import { getSalesBy } from "../handlers/SalesReportHandler";

const DisplayByConfiguration = ({ salesBy, setSalesBy }) => {
	return (
		<div className="flex flex-col w-[50%] z-50 mx-auto mt-6">
			<span className="material-symbols-rounded mb-2.5">gallery_thumbnail</span>
			<p className="text-xs p-2">Display Sales Report By:</p>
			<div className="flex flex-col justify-around w-full lg:flex-row">
				<div className="flex justify-center w-full lg:w-[45%]">
					<DropDown data={salesBy} setter={setSalesBy} getter={getSalesBy} />
				</div>
			</div>
		</div>
	);
};

export default DisplayByConfiguration;
