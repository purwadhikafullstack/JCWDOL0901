import React from "react";

const OrderTableHead = ({ superAdmin }) => {
	return (
		<div className="rounded-lg bg-green-500 text-green-100 py-3">
			<div className="text-sm px-8 grid grid-cols-12 w-full uppercase font-semibold sm:text-lg">
				<div className="col-span-1 whitespace-nowrap">Order ID</div>
				{superAdmin && <div className="col-span-2 whitespace-nowrap">Branch</div>}
				<div className="col-span-2 whitespace-nowrap">Created At</div>
				<div className="col-span-2 whitespace-nowrap">Customer</div>
				<div className="col-span-2 whitespace-nowrap">Amount</div>
				<div className="col-span-2 whitespace-nowrap">Status</div>
				<div className="col-span-1 whitespace-nowrap">Voucher</div>
				{!superAdmin && <div className="col-span-2 whitespace-nowrap">Action</div>}
			</div>
		</div>
	);
};

export default OrderTableHead;
