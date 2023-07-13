import React from "react";

import { orderDefault, sortDefault } from "./handlers/ProductStockHandler.js";
import SearchConfiguration from "./SearchConfiguration.jsx";
import Pagination from "../Pagination.jsx";

import SalesReportTable from "./SalesReportTable.jsx";

const SalesReportTableGroup = () => {
	const [name, setName] = React.useState("");
	const [filterBy, setFilterBy] = React.useState("");
	const [filter, setFilter] = React.useState("");
	const [sort, setSort] = React.useState("");
	const [order, setOrder] = React.useState("");
	const [page, setPage] = React.useState(1);
	const [maxPage, setMaxPage] = React.useState(1);
	const [startDate, setStartDate] = React.useState("");
	const [endDate, setEndDate] = React.useState("");

	React.useEffect(() => {
		setPage(1);
	}, [name, filter, order, startDate, endDate]);

	return (
		<div className="flex flex-col justify-start pt-0.5 mt-7 px-4 h-full">
			<SearchConfiguration
				setPage={setPage}
				setName={setName}
				filterBy={filterBy}
				setFilterBy={setFilterBy}
				filter={filter}
				setFilter={setFilter}
				sort={sort}
				setSort={setSort}
				order={order}
				setOrder={setOrder}
				startDate={startDate}
				endDate={endDate}
				setStartDate={setStartDate}
				setEndDate={setEndDate}
			/>
			<SalesReportTable
				name={name}
				sort={sort}
				filterBy={filterBy}
				filter={filter}
				order={order}
				page={page}
				setMaxPage={setMaxPage}
				startDate={startDate}
				endDate={endDate}
			/>
			<div className="mx-auto mt-16">
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default SalesReportTableGroup;
