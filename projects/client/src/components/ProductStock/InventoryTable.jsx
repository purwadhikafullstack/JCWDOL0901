import React from "react";

import InventoryTableHead from "./InventoryTable/InventoryTableHead.jsx";
import InventoryTableBody from "./InventoryTable/InventoryTableBody.jsx";

const InventoryTable = ({ name, filterBy, filter, sort, order, page, setMaxPage }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border border-green-300 border-2 mx-4">
			<table className="w-full">
				<InventoryTableHead />
				<InventoryTableBody
					name={name}
					filterBy={filterBy}
					filter={filter}
					sort={sort}
					order={order}
					page={page}
					setMaxPage={setMaxPage}
				/>
			</table>
		</div>
	);
};

export default InventoryTable;
