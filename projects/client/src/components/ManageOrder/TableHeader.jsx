import React from "react";

const TableHeader = () => {
	return (
		<div className="rounded-lg bg-green-500 text-green-100 min-w-[1200px] mx-6 py-2">
			<div className="text-sm px-8 grid grid-cols-12 w-full uppercase font-semibold sm:text-lg">
				<div className="col-span-1 whitespace-nowrap">Order ID</div>
				<div className="col-span-2 whitespace-nowrap">Branch</div>
				<div className="col-span-2 whitespace-nowrap">Created At</div>
				<div className="col-span-2 whitespace-nowrap">Customer</div>
				<div className="col-span-2 whitespace-nowrap">Amount</div>
				<div className="col-span-2 whitespace-nowrap">Status</div>
				<div className="col-span-1 whitespace-nowrap">Voucher</div>
			</div>
		</div>
	);
};

export default TableHeader;
