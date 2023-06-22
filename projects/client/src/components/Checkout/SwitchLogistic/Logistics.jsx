import React from "react";
import LogisticOptions from "./LogisticOptions.jsx";

const Logistics = () => {
	return (
		<>
			<LogisticOptions courier="jne" />
			<LogisticOptions courier="tiki" />
			<LogisticOptions courier="pos" />
		</>
	);
};

export default Logistics;
