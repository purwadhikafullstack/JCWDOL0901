import React from "react";
import DropDown from "../../DropDown";
import { getOrder, getSortBy } from "../handlers/ProductStockHandler";

const Icon = () => {
	return (
		<div className="self-center ml-4 mb-1">
			<span class="material-symbols-rounded">sort</span>
		</div>
	);
};

const SortConfiguration = ({ sort, setSort, order, setOrder }) => {
	return (
		<div className="flex flex-col w-[25%]">
			<Icon />
			<div className="flex flex-col items w-full lg:flex-row lg:justify-around">
				<div className="flex justify-center w-full lg:w-[45%]">
					<DropDown data={sort} setter={setSort} getter={getSortBy} />
				</div>
				<div className="flex mt-2 justify-center w-full lg:w-[45%] lg:mt-0">
					<DropDown data={order} setter={setOrder} getter={getOrder} />
				</div>
			</div>
		</div>
	);
};

export default SortConfiguration;
