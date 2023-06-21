import React from "react";
import Pagination from "../Pagination";
import OrderTable from "./OrderTable/OrderTable";
import SearchConfiguration from "./SearchConfiguration";

const OrderTableGroup = () => {
	const [name, setName] = React.useState("");
	const [filterBy, setFilterBy] = React.useState("");
	const [filter, setFilter] = React.useState("");
	const [sort, setSort] = React.useState("");
	const [order, setOrder] = React.useState("");
	const [page, setPage] = React.useState(1);
	const [maxPage, setMaxPage] = React.useState(1);

	return (
		<div className="flex flex-col justify-start overflow-x-auto mt-20 pt-4 px-4">
			<SearchConfiguration
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
			<OrderTable
				name={name}
				filterBy={filterBy}
				filter={filter}
				sort={sort}
				order={order}
				page={page}
				setMaxPage={setMaxPage}
			/>
			<div className="mx-auto my-12">
				<Pagination setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default OrderTableGroup;
