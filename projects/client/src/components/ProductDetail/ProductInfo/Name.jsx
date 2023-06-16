import React from "react";

const Name = ({ product }) => {
	return <span className="my-3 text-xl font-medium text-left w-full">{product.name}</span>;
};

export default Name;
