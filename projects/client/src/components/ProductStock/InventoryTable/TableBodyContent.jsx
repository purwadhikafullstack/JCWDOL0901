import React from "react";
import ViewMode from "./ViewMode";
import EditMode from "./EditMode";

const TableBodyContent = ({ datas }) => {
	const [editMode, setEditMode] = React.useState();

	return datas.map((item, index) => {
		if (editMode === index)
			return <EditMode item={item} key={index} index={index} setEditMode={setEditMode} />;
		return <ViewMode item={item} key={index} index={index} setEditMode={setEditMode} />;
	});
};

export default TableBodyContent;
