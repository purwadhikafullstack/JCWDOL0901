import React from "react";
import OrderTableHead from "./OrderTableHead";
import OrderTableBody from "./OrderTableBody";
import { useSelector } from "react-redux";

const OrderTable = ({ name, startDate, endDate, filterBy, filter, sort, order, page, setMaxPage }) => {
	const { superAdmin } = useSelector((state) => state.admin);
	return (
		<div className="flex flex-col min-w-[1200px] mx-6">
			<OrderTableHead superAdmin={superAdmin} />
			<OrderTableBody
				superAdmin={superAdmin}
				name={name}
				startDate={startDate}
				endDate={endDate}
				filterBy={filterBy}
				filter={filter}
				sort={sort}
				order={order}
				page={page}
				setMaxPage={setMaxPage}
			/>
		</div>
	);
};

export default OrderTable;
