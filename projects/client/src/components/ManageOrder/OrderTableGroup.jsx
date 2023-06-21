import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Pagination from "../Pagination";

const OrderTableGroup = () => {
	return (
		<div className="flex flex-col justify-start overflow-x-auto mt-24 px-4">
			<TableHeader />
			<TableBody />
			<div className="mx-auto my-12">
				<Pagination />
			</div>
		</div>
	);
};

export default OrderTableGroup;
