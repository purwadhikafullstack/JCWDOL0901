import React from "react";

const UserSalesReportTableHead = () => {
	const thClassName = "py-6 bg-green-500 text-green-100 px-10 whitespace-nowrap";
	return (
		<thead className="uppercase">
			<tr className="text-center text-sm sm:text-base">
				<th className={"py-4 bg-green-500 text-green-100 px-4 whitespace-nowrap"}>No.</th>
				<th className={"py-4 bg-green-500 text-green-100 px-4 whitespace-nowrap"}>User</th>
				<th className={"py-4 bg-green-500 text-green-100 px-4 whitespace-nowrap"}>Email</th>
				<th className={"py-4 bg-green-500 text-green-100 px-4 whitespace-nowrap"}>Total Spending</th>
			</tr>
		</thead>
	);
};

export default UserSalesReportTableHead;
