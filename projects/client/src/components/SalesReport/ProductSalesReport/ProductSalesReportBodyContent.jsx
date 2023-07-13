import React from "react";
import ProductSalesViewMode from "./ProductSalesViewMode";

const ProductSalesReportBodyContent = ({ datas }) => {
	return datas.map((item, index) => {
		return <ProductSalesViewMode item={item} key={index} index={index} />;
	});
};

export default ProductSalesReportBodyContent;
