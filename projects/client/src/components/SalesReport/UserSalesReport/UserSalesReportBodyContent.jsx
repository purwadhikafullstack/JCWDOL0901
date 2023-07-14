import React from "react";
import UserSalesViewMode from "./UserSalesViewMode";

const UserSalesReportBodyContent = ({ datas }) => {
	return datas.map((item, index) => {
		return <UserSalesViewMode item={item} key={index} index={index} />;
	});
};

export default UserSalesReportBodyContent;
