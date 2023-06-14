import React from "react";
import PromoTableBody from "./PromoTableBody";
import PromoTableHead from "./PromoTableHead";

const PromoTable = ({ filter, sort, order, page, setMaxPage }) => {
	return (
		<div className="flex overflow-x-auto rounded-lg border border-green-300 border-2 mx-4">
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
