import React from "react";
import OrderTableHead from "./OrderTableHead";
import OrderTableBody from "./OrderTableBody";

const OrderTable = () => {
	return (
		<div className="flex flex-col min-w-[1200px] mx-6">
			<OrderTableHead />
			<OrderTableBody />
		</div>
	);
};

export default OrderTable;
