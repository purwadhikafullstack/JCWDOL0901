import React from "react";
import { getSalesReportByProduct } from "../handlers/SalesReportHandler.js";
import ProductSalesReportBodyContent from "./ProductSalesReportBodyContent";
// import { generateUrlQuery, getBranchInventories } from "../handlers/SalesReportHandler.js";

const ProductSalesReportTableBody = ({ name, filterBy, filter, sort, order, page, setMaxPage, startDate, endDate }) => {
	const [datas, setDatas] = React.useState([]);
	console.log("datas of productsalestablebody: ", datas);
	React.useEffect(() => {
		getSalesReportByProduct()
			.then((result) => {
				setDatas(result.data);
				// setMaxPage(Math.ceil(result.data.count / 3));
			})
			.catch((error) => alert("Server Unavailable"));
	}, []);

	// React.useEffect(() => {
	// 	const query = generateUrlQuery(name, page, filterBy, filter, sort, order, startDate, endDate);

	// 	getBranchInventories(query)
	// 		.then((result) => {
	// 			setDatas(result.data.rows);
	// 			setMaxPage(Math.ceil(result.data.count / 3));
	// 		})
	// 		.catch((error) => alert("Server Unavailable"));
	// }, [filter, order, page, name, startDate, endDate]);

	return datas && <ProductSalesReportBodyContent datas={datas} />;
};

export default ProductSalesReportTableBody;
