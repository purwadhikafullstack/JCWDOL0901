import React from "react";

import { orderDefault, sortDefault } from "../handlers/SalesReportHandler";
import Pagination from "../../Pagination.jsx";
import ProductSalesReportTable from "./ProductSalesReportTable.jsx";
import ProductSalesReportSearchConfiguration from "./ProductSalesReportSearchConfiguration";

const ProductSalesReportTableGroup = () => {
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

	return (
		<div className="flex flex-col justify-start pt-0.5 mt-7 px-4 h-full">
			<h1 className="text-2xl font-bold mb-14">Sales Report By Product</h1>
			<ProductSalesReportSearchConfiguration
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
			<ProductSalesReportTable
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

export default ProductSalesReportTableGroup;
