import React from "react";
import { getPromotionsType, patchInventoryPromotions } from "./handlers/productPromoHandler";
import PromoTableBody from "./PromoTableBody";

const PromoTableHead = () => {
	const thClassName = "py-6 bg-green-500 text-green-100 px-10 whitespace-nowrap";
	return (
		<thead className="uppercase">
			<tr className="text-center">
				<th className={thClassName}>Image</th>
				<th className={thClassName}>Name</th>
				<th className={thClassName}>Promo Type</th>
				<th className={thClassName}>Value</th>
				<th className={thClassName}>Start Date</th>
				<th className={thClassName}>End Date</th>
				<th className={thClassName}>Action</th>
			</tr>
		</thead>
	);
};

const PromoTable = ({ filter, sort, order, page, setMaxPage }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border border-green-300 border-2">
			<table className="w-full">
				<PromoTableHead />
				<PromoTableBody
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

export default PromoTable;
