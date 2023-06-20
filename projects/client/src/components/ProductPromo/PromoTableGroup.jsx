import React from "react";
import PromoTable from "./PromoTable/PromoTable.jsx";
import Pagination from "../Pagination.jsx";
import SearchConfiguration from "./SearchConfiguration.jsx";
import { orderDefault, sortDefault } from "./handlers/productPromoHandler.js";

const PromoTableGroup = () => {
	const [name, setName] = React.useState("");
	const [filter, setFilter] = React.useState("");
	const [sort, setSort] = React.useState(sortDefault);
	const [order, setOrder] = React.useState(orderDefault);
	const [page, setPage] = React.useState(1);
	const [maxPage, setMaxPage] = React.useState(1);

	return (
		<div className="flex flex-col justify-start mt-11 px-4 h-full">
			<SearchConfiguration
				setName={setName}
				filter={filter}
				setFilter={setFilter}
				order={order}
				setOrder={setOrder}
				sort={sort}
				setSort={setSort}
				setPage={setPage}
			/>
			<PromoTable
				name={name}
				sort={sort}
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

export default PromoTableGroup;
