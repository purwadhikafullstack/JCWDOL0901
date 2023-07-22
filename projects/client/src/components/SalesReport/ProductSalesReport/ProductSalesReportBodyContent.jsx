import React from "react";
import ProductSalesViewMode from "./ProductSalesViewMode";

const ProductSalesReportBodyContent = ({ datas, page, itemPerPage }) => {
	return datas.map((item, index) => {
		return <ProductSalesViewMode item={item} key={index} index={index} page={page} itemPerPage={itemPerPage} />;
	});
};

export default ProductSalesReportBodyContent;
