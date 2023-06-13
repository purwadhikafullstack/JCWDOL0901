import React from "react";
import CategoryTableBody from "./CategoryTableBody";

const CategoryTableHead = () => {
	const thClassName = "py-6 bg-green-500 text-green-100 px-10 whitespace-nowrap";
	return (
		<thead className="uppercase">
			<tr className="text-center">
				<th className={thClassName}>No</th>
				<th className={thClassName}>Image</th>
				<th className={thClassName}>Name</th>
				<th className={thClassName}>Action</th>
			</tr>
		</thead>
	);
};

const CategoryTable = ({ page, setMaxPage }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border border-green-300 border-2">
			<table className="w-full">
				<CategoryTableHead />
				<CategoryTableBody page={page} setMaxPage={setMaxPage} />
			</table>
		</div>
	);
};

export default CategoryTable;
