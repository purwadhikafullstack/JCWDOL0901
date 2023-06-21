import React from "react";
import OrderTableHead from "./OrderTableHead";
import OrderTableBody from "./OrderTableBody";
import { useSelector } from "react-redux";

const OrderTable = () => {
	const { superAdmin } = useSelector((state) => state.admin);
	return (
		<div className="flex flex-col min-w-[1200px] mx-6">
			<OrderTableHead superAdmin={superAdmin} />
			<OrderTableBody superAdmin={superAdmin} />
		</div>
	);
};

export default OrderTable;
