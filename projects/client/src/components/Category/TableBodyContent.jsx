import React from "react";
import ViewMode from "./ViewMode";

const TableBodyContent = ({ datas }) => {
	return datas.map((item, index) => {
		return <ViewMode item={item} key={index} index={index} />;
	});
};

export default TableBodyContent;
