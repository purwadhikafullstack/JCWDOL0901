import React from "react";
import PromoTable from "./PromoTable/PromoTable.jsx";
import Pagination from "../Pagination.jsx";

import CreateButton from "./CreateButton.jsx";

import SearchConfiguration from "./SearchConfiguration.jsx";
import { orderDefault, sortDefault } from "./handlers/productPromoHandler.js";

const PromoTableGroup = () => {
	const [filter, setFilter] = React.useState("");
	const [sort, setSort] = React.useState(sortDefault);
	const [order, setOrder] = React.useState(orderDefault);
	const [page, setPage] = React.useState(1);
	const [maxPage, setMaxPage] = React.useState(1);

	return (
		<div className="flex flex-col justify-start mt-16 px-4 h-full">
			<SearchConfiguration
				filter={filter}
				setFilter={setFilter}
				order={order}
				setOrder={setOrder}
				sort={sort}
				setSort={setSort}
				setPage={setPage}
			/>

			<CreateButton />
			<PromoTable sort={sort} filter={filter} order={order} page={page} setMaxPage={setMaxPage} />
			<div className="mx-auto mt-16">
				<Pagination page={page} setPage={setPage} maxPage={maxPage} />
			</div>
		</div>
	);
};

export default PromoTableGroup;
