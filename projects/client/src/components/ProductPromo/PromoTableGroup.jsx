import React from "react";
import PromoTable from "./PromoTable.jsx";
import Pagination from "../Pagination.jsx";
import SearchSort from "./SearchSort.jsx";
import SearchFilter from "./SearchFilter.jsx";
import CreateButton from "./CreateButton.jsx";
import ResetButton from "./ResetButton.jsx";

const sortDefault = { id: "start_at", name: "Start Date" };
const orderDefault = { id: "0", name: "Descending" };

const resetSetting = (setFilter, setSort, setOrder) => {
	setFilter("");
	setSort(sortDefault);
	setOrder(orderDefault);
};

const PromoTableGroup = () => {
	const [filter, setFilter] = React.useState("");
	const [sort, setSort] = React.useState(sortDefault);
	const [order, setOrder] = React.useState(orderDefault);
	const [page, setPage] = React.useState(1);
	const [maxPage, setMaxPage] = React.useState(1);

	return (
		<div className="flex flex-col justify-start mt-16 px-4 h-full">
			<div className="flex flex-row w-full justify-between mb-4 p-4 rounded-xl z-50 sm:mb-10">
				<div className="flex flex-col h-full w-[40%]">
					<SearchFilter filter={filter} setFilter={setFilter} />
				</div>
				<SearchSort sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
				<ResetButton onClick={() => resetSetting(setFilter, setSort, setOrder)} />
			</div>
			<CreateButton />
			<PromoTable sort={sort} filter={filter} order={order} page={page} setMaxPage={setMaxPage} />
			<div className="mx-auto mt-auto mt-16">
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default PromoTableGroup;
