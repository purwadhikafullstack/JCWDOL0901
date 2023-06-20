import React from "react";
import { Link } from "react-router-dom";
const HeaderContent = () => {
	return (
		<>
			<span className="col-span-1 material-symbols-rounded">local_activity</span>
			<span className="col-span-4 text-left">Voucher</span>
			<Link className="col-start-7 cursor-pointer mr-2" to="voucher/change">
				<span className="material-symbols-rounded text-sm">arrow_forward_ios</span>
			</Link>
		</>
	);
};

export default HeaderContent;
