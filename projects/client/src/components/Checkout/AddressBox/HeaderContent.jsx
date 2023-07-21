import React from "react";
import { Link } from "react-router-dom";

const HeaderContent = () => {
	return (
		<>
			<span className="col-span-1 material-symbols-rounded">pin_drop</span>
			<span className="col-span-4 text-left">Address:</span>
			<Link className="col-span-2 sm:col-start-7 underline cursor-pointer mr-2" to="address/change">
				<span className="text-sm">Edit </span>
				<span className="material-symbols-rounded text-sm underline"> edit</span>
			</Link>
		</>
	);
};

export default HeaderContent;
