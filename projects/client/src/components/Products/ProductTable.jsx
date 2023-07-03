import React from 'react'
import ProductTableBody from './ProductTableBody';

const ProductTableHead = () => {
	const thClassName = "py-4 bg-green-500 text-green-100 px-6 whitespace-nowrap";
	return (
		<thead className="uppercase">
			<tr className="text-center text-xs">
				<th className={thClassName}>No</th>
				<th className={thClassName}>Image</th>
				<th className={thClassName}>Name</th>
				<th className={thClassName}>Action</th>
			</tr>
		</thead>
	);
};

const ProductTable = ({ page, setMaxPage, itemPerPage, filter, sort, order }) => {
  return (
    <div className="flex overflow-x-auto rounded-lg border-green-300 border-2">
			<table className="w-full">
				<ProductTableHead />
				<ProductTableBody
					page={page}
					setMaxPage={setMaxPage}
					itemPerPage={itemPerPage}
					filter={filter}
					sort={sort}
					order={order}
				/>
			</table>
		</div>
  )
}

export default ProductTable