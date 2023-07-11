import React from "react";
import DropDown from "../../DropDown";
import { getOrderOfDate, getSortBy } from "../handlers/ProductStockHandler";
import DisabledDropDown from "../../DisabledDropDown";

const Icon = () => {
	return (
		<div className="self-center mb-1">
			<span className="material-symbols-rounded">sort</span>
		</div>
	);
};

const Order = ({ sort, setSort, order, setOrder }) => {
	React.useEffect(() => {
		setOrder("");
	}, [sort?.id]);

	if (sort?.id === "created_at") {
		return <DropDown data={order} setter={setOrder} getter={getOrderOfDate} />;
	}

	return <DisabledDropDown />;
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
					<Order sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
				</div>
			</div>
		</div>
	);
};

export default SortConfiguration;
