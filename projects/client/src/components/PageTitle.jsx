import React from "react";

const PageTitle = ({ title, className }) => {
	const jsxClassName = `mx-auto text-xl font-semibold ${className} sm:text-2xl`;
	return <div className={jsxClassName}>{title}</div>;
};

export default PageTitle;
