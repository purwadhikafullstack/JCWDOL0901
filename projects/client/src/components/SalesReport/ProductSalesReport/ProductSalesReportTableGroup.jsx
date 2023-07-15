import React from "react";

import { orderDefault, sortDefault } from "../handlers/SalesReportHandler";
import Pagination from "../../Pagination.jsx";
import ProductSalesReportTable from "./ProductSalesReportTable.jsx";
import ProductSalesReportSearchConfiguration from "./ProductSalesReportSearchConfiguration";

const ProductSalesReportTableGroup = () => {
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
			<h1>Product report</h1>
			<ProductSalesReportSearchConfiguration
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
			<ProductSalesReportTable
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

export default ProductSalesReportTableGroup;
