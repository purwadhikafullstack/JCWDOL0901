import React from "react";
import { getEmptyPromise, getOrderBy, getOrderOfAmount, getOrderOfDate } from "../handlers/manageOrderHandler";
import DropDown from "../../DropDown";
import DisabledDropDown from "../../DisabledDropDown.jsx";

const SortBy = ({ sort, order, setOrder }) => {
	React.useEffect(() => {
		setOrder("");
	}, [sort.id]);

	if (sort.id === "created_at") {
		return <DropDown data={order} setter={setOrder} getter={getOrderOfDate} />;
	} else if (sort.id === "amount") {
		return <DropDown data={order} setter={setOrder} getter={getOrderOfAmount} />;
	}

	return <DisabledDropDown />;
};

const SortConfiguration = ({ sort, setSort, order, setOrder }) => {
	return (
		<div className="flex flex-col h-full w-[25%]">
			<span className="material-symbols-rounded mb-2.5">sort</span>
			<div className="flex flex-col justify-around w-full lg:flex-row">
				<div className="flex mb-2 justify-center w-full lg:mb-0 lg:w-[45%]">
					<DropDown data={sort} setter={setSort} getter={getOrderBy} />
				</div>
				<div className="flex justify-center w-full lg:w-[45%]">
					<SortBy sort={sort} order={order} setOrder={setOrder} />
				</div>
			</div>
		</div>
	);
};

export default SortConfiguration;
