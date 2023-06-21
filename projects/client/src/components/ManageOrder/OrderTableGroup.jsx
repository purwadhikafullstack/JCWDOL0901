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
			<div className="flex flex-row pl-12 ml-1.5">
				<div className="flex flex-col items-center mr-auto">
					<span class="material-symbols-rounded">date_range</span>
					<div className="flex flex-col lg:flex-row">
						<input type="date" className="text-xs rounded-lg border-green-300 mb-2 lg:mb-0 lg:mr-4 w-32" />
						<input type="date" className="text-xs rounded-lg border-green-300 w-32" />
					</div>
				</div>
				<div className="mt-auto">
					<label className="mr-8 relative inline-flex items-center cursor-pointer ">
						<input type="checkbox" value="" className="sr-only peer" />
						<div className="w-11 h-6 bg-red rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
						<span className="ml-3 text-sm font-medium text-gray-900">By Date</span>
					</label>
				</div>
			</div>
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
