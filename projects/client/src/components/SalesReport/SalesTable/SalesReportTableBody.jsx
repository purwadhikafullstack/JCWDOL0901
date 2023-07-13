import React from "react";
import { generateUrlQuery, getBranchInventories } from "../handlers/SalesReportHandler";
import SalesReportBodyContent from "./SalesReportBodyContent.jsx";

const SalesReportTableBody = ({ name, filterBy, filter, sort, order, page, setMaxPage, startDate, endDate }) => {
	const [datas, setDatas] = React.useState([]);

	React.useEffect(() => {
		const query = generateUrlQuery(name, page, filterBy, filter, sort, order, startDate, endDate);

		getBranchInventories(query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count / 3));
			})
			.catch((error) => alert("Server Unavailable"));
	}, [filter, order, page, name, startDate, endDate]);

	return datas && <SalesReportBodyContent datas={datas} />;
};

export default SalesReportTableBody;
