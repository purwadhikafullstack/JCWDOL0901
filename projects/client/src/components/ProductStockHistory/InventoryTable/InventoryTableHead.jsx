import React from "react";

const InventoryTableHead = () => {
	const thClassName = "py-6 bg-green-500 text-green-100 px-10 whitespace-nowrap";
	return (
		<thead className="uppercase">
			<tr className="text-center">
				<th className={thClassName}>Image</th>
				<th className={thClassName}>Name</th>
				<th className={thClassName}>Changes</th>
				<th className={thClassName}>Time</th>
				<th className={thClassName}>Description</th>
			</tr>
		</thead>
	);
};

export default InventoryTableHead;
