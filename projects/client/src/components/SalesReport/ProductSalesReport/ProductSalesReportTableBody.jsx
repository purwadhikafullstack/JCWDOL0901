import React from "react";
import { getSalesReportByProduct } from "../handlers/SalesReportHandler.js";
import ProductSalesReportBodyContent from "./ProductSalesReportBodyContent";
import { generateUrlQuery, getBranchInventories } from "../handlers/SalesReportHandler.js";

const ProductSalesReportTableBody = ({
	name,
	filterBy,
	filter,
	sort,
	order,
	page,
	setMaxPage,
	startDate,
	endDate,
	itemPerPage,
}) => {
	const [datas, setDatas] = React.useState([]);
	React.useEffect(() => {
		const query = generateUrlQuery(name, page, filterBy, filter, sort, order, startDate, endDate, itemPerPage);
		getSalesReportByProduct(query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count.length / itemPerPage));
			})
			.catch((error) => alert("Server Unavailable"));
	}, [filter, order, page, startDate, endDate]);

	// React.useEffect(() => {
	// 	const query = generateUrlQuery(name, page, filterBy, filter, sort, order, startDate, endDate);

	// 	getBranchInventories(query)
	// 		.then((result) => {
	// 			setDatas(result.data.rows);
	// 			setMaxPage(Math.ceil(result.data.count / 3));
	// 		})
	// 		.catch((error) => alert("Server Unavailable"));
	// }, [filter, order, page, name, startDate, endDate]);

	return datas && <ProductSalesReportBodyContent datas={datas} page={page} itemPerPage={itemPerPage} />;
};

export default ProductSalesReportTableBody;
