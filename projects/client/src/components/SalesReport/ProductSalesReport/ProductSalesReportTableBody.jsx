import React from "react";
import { getSalesReportByProduct } from "../handlers/SalesReportHandler.js";
import ProductSalesReportBodyContent from "./ProductSalesReportBodyContent";
import { generateUrlQuery, getBranchInventories } from "../handlers/SalesReportHandler.js";

const ProductSalesReportTableBody = ({ sort, order, page, setMaxPage, startDate, endDate, itemPerPage }) => {
	const [datas, setDatas] = React.useState([]);
	React.useEffect(() => {
		const query = generateUrlQuery(page, sort, order, startDate, endDate, itemPerPage);
		getSalesReportByProduct(query)
			.then((result) => {
				setDatas(result.data.rows);
				setMaxPage(Math.ceil(result.data.count.length / itemPerPage));
			})
			.catch((error) => alert("Server Unavailable"));
	}, [order, page, startDate, endDate]);

	return datas && <ProductSalesReportBodyContent datas={datas} page={page} itemPerPage={itemPerPage} />;
};

export default ProductSalesReportTableBody;
