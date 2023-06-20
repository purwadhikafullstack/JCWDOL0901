import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const HeaderContent = () => {
	const summary = useSelector((state) => state.checkout.summary);
	return (
		<>
			<span className="col-span-1 material-symbols-rounded">local_activity</span>
			<span className="col-span-4 text-left">Voucher</span>
			{summary.total ? (
				<Link className="col-start-7 cursor-pointer mr-2" to="voucher/change">
					<span className="material-symbols-rounded text-sm">arrow_forward_ios</span>
				</Link>
			) : null}
		</>
	);
};

export default HeaderContent;
