import React from "react";
import { Link } from "react-router-dom";

const HeaderContent = () => {
	return (
		<>
			<span className="col-span-1 material-symbols-rounded">local_shipping</span>
			<span className="col-span-4 text-left">Logistic:</span>
			<Link className="col-start-7 underline cursor-pointer mr-2" to="logistic/change">
				<span className="material-symbols-rounded text-sm">arrow_forward_ios</span>
			</Link>
		</>
	);
};

export default HeaderContent;
