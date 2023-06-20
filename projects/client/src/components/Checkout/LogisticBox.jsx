import React from "react";
import MenuHeader from "./MenuHeader";
import HeaderContent from "./LogisticBox/HeaderContent";
import LogisticBoxDetail from "./LogisticBox/LogisticBoxDetail.jsx";

const LogisticBox = () => {
	return (
		<>
			<MenuHeader Content={HeaderContent} />
			<LogisticBoxDetail />
		</>
	);
};

export default LogisticBox;
