import React from "react";

import { orderDefault, sortDefault } from "./handlers/ProductStockHandler.js";
import SearchConfiguration from "./SearchConfiguration.jsx";
import Pagination from "../Pagination.jsx";

import InventoryTable from "./InventoryTable.jsx";

const StockTableGroup = () => {
	const [name, setName] = React.useState("");
	const [filterBy, setFilterBy] = React.useState("");
	const [filter, setFilter] = React.useState("");
	const [sort, setSort] = React.useState("");
	const [order, setOrder] = React.useState("");
	const [page, setPage] = React.useState(1);
	const [maxPage, setMaxPage] = React.useState(1);

	React.useEffect(() => {
		setPage(1);
	}, [name, filter, order]);

	return (
		<div className="flex flex-col justify-start mt-24 px-0 lg:px-4 h-full">
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
			/>
			<InventoryTable
				name={name}
				sort={sort}
				filterBy={filterBy}
				filter={filter}
				order={order}
				page={page}
				setMaxPage={setMaxPage}
			/>
			<div className="mx-auto mt-16">
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default StockTableGroup;
