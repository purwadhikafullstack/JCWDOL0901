import React from "react";
import PromoTableBody from "./PromoTableBody";
import PromoTableHead from "./PromoTableHead";

const PromoTable = ({ name, filter, sort, order, page, setMaxPage }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border border-green-300 border-2 mx-6">
			<table className="w-full">
				<PromoTableHead />
				<PromoTableBody
					name={name}
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
