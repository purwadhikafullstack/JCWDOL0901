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
		<div className="flex flex-col mt-20 px-8 h-full">
			<div className="flex flex-row w-full justify-between mb-4">
				<SearchFilter filter={filter} setFilter={setFilter} />
				<SearchSort sort={sort} setSort={setSort} order={order} setOrder={setOrder} />
				<div className="flex flex-col">
					<ResetButton onClick={() => resetSetting(setFilter, setSort, setOrder)} />
					<CreateButton />
				</div>
			</div>
			<PromoTable sort={sort} filter={filter} order={order} page={page} setMaxPage={setMaxPage} />
			<div className="mx-auto mt-auto mb-8">
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default PromoTableGroup;
