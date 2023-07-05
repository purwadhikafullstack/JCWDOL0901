import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
const HeaderContent = () => {
=======
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const HeaderContent = () => {
	const summary = useSelector((state) => state.checkout.summary);
>>>>>>> development
	return (
		<>
			<span className="col-span-1 material-symbols-rounded">local_activity</span>
			<span className="col-span-4 text-left">Voucher</span>
<<<<<<< HEAD
			<Link className="col-start-7 cursor-pointer mr-2" to="voucher/change">
				<span className="material-symbols-rounded text-sm">arrow_forward_ios</span>
			</Link>
=======
			{summary.total ? (
				<Link className="col-start-7 cursor-pointer mr-2" to="voucher/change">
					<span className="material-symbols-rounded text-sm">arrow_forward_ios</span>
				</Link>
			) : null}
>>>>>>> development
		</>
	);
};

export default HeaderContent;
