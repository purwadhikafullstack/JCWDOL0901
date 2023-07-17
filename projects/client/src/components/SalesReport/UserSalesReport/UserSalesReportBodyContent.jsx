import React from "react";
import UserSalesViewMode from "./UserSalesViewMode";

const UserSalesReportBodyContent = ({ datas, page, itemPerPage }) => {
	return datas.map((item, index) => {
		return <UserSalesViewMode item={item} key={index} index={index} page={page} itemPerPage={itemPerPage}/>;
	});
};

export default UserSalesReportBodyContent;
