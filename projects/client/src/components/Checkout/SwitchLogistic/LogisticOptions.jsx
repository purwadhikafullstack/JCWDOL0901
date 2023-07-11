import React from "react";
import CostDetail from "./CostDetail";

const LogisticOptions = ({ services, courier }) => {
	return (
		<div className="flex flex-col">
			<span className="font-bold text-left uppercase bg-green-300 text-green-100 pl-5 py-2">{services.name}</span>
			<CostDetail costs={services.costs} courier={courier} />
		</div>
	);
};

export default LogisticOptions;
