import React from "react";
import { getOrder, getOrderBy } from "../handlers/manageOrderHandler";
import DropDown from "../../DropDown";

const SortConfiguration = ({ sort, setSort, order, setOrder }) => {
	return (
		<div className="flex flex-col h-full w-[25%]">
			<span className="material-symbols-rounded mb-2.5">sort</span>
			<div className="flex flex-col justify-around w-full lg:flex-row">
				<div className="flex mb-2 justify-center w-full lg:mb-0 lg:w-[45%]">
					<DropDown data={sort} setter={setSort} getter={getOrderBy} />
				</div>
				<div className="flex justify-center w-full lg:w-[45%]">
					<DropDown data={order} setter={setOrder} getter={getOrder} />
				</div>
			</div>
		</div>
	);
};

export default SortConfiguration;
