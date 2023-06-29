import React from "react";
import ProductTableBody from "./ProductTableBody";

const ProductTableHead = () => {
	const thClassName = "py-4 bg-green-500 text-green-100 whitespace-nowrap ";
	return (
		<thead className="uppercase">
			<tr className="text-center text-xs">
				<th className={thClassName + "px-6"}>No</th>
				<th className={thClassName + "px-6"}>Image</th>
				<th className={thClassName + "px-12"}>Name</th>
				<th className={thClassName + "px-6"}>Unit</th>
				<th className={thClassName + "px-4"}>Weight</th>
				<th className={thClassName + "px-6"}>Price</th>
				<th className={thClassName + "px-16"}>Description</th>
				<th className={thClassName + "px-6"}>Category</th>
				<th className={thClassName + "px-6"}>Active</th>
				<th className={thClassName + "px-6"}>Action</th>
			</tr>
		</thead>
	);
};

const ProductTable = ({ page, setMaxPage, itemPerPage, filter, sort, order, name, filterBy }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border-green-300 border-2">
			<table className="w-full">
				<ProductTableHead />
				<ProductTableBody
					page={page}
					setMaxPage={setMaxPage}
					itemPerPage={itemPerPage}
					name={name}
					sort={sort}
					order={order}
					filter={filter}
					filterBy={filterBy}
				/>
			</table>
		</div>
	);
};

export default ProductTable;
