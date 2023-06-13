import React from "react";

const PageTitle = ({ title, color }) => {
	const className = `mx-auto text-xl font-semibold ${color}`;
	return <div className={className}>{title}</div>;
};

export default PageTitle;
