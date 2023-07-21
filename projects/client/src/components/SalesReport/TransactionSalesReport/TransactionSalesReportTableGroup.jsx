import React from "react";

import { orderDefault, sortDefault } from "../handlers/SalesReportHandler";
import Pagination from "../../Pagination";
import TransactionSalesReportTable from "./TransactionSalesReportTable";
import TransactionSalesReportSearchConfiguration from "./TransactionSalesReportSearchConfiguration";

const TransactionSalesReportTableGroup = () => {
	const [sort, setSort] = React.useState("");
	const [order, setOrder] = React.useState("");
	const [page, setPage] = React.useState(1);
	const [maxPage, setMaxPage] = React.useState(1);
	const [startDate, setStartDate] = React.useState("");
	const [endDate, setEndDate] = React.useState("");
	const [itemPerPage, setItemPerPage] = React.useState(5);

	React.useEffect(() => {
		setPage(1);
	}, [order, startDate, endDate, sort]);
	console.log("page: ", page);
	console.log("max page: ", maxPage);

	return (
		<div className="flex flex-col justify-start pt-0.5 mt-7 px-4 h-full">
			<h1>Transaction report</h1>
			<TransactionSalesReportSearchConfiguration
				setPage={setPage}
				sort={sort}
				setSort={setSort}
				order={order}
				setOrder={setOrder}
				startDate={startDate}
				endDate={endDate}
				setStartDate={setStartDate}
				setEndDate={setEndDate}
			/>
			<TransactionSalesReportTable
				sort={sort}
				order={order}
				page={page}
				setMaxPage={setMaxPage}
				startDate={startDate}
				endDate={endDate}
				itemPerPage={itemPerPage}
			/>
			<div className="mx-auto mt-16">
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default TransactionSalesReportTableGroup;
