import React from "react";

const PageTitle = ({ title, color }) => {
	const className = `mx-auto text-xl font-semibold ${color} sm:text-2xl`;
	return <div className={className}>{title}</div>;
};

export default PageTitle;
