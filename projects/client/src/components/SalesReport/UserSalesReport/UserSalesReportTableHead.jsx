import React from "react";

const UserSalesReportTableHead = () => {
	const thClassName = "py-6 bg-green-500 text-green-100 px-10 whitespace-nowrap";
	return (
		<thead className="uppercase">
			<tr className="text-center">
				<th className={"py-6 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>No.</th>
				<th className={"py-6 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>User</th>
				<th className={"py-6 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>User's email</th>
				<th className={"py-6 bg-green-500 text-green-100 px-1 whitespace-nowrap"}>Total Spending</th>
			</tr>
		</thead>
	);
};

export default UserSalesReportTableHead;
