import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderContent = () => {
	const checkout = useSelector((state) => state.checkout);

	return (
		<>
			<span className="col-span-1 material-symbols-rounded">local_shipping</span>
			<span className="col-span-4 text-left">Logistic:</span>
			{checkout.summary.weight && checkout.address.id ? (
				<Link className="col-start-7 underline cursor-pointer mr-2" to="logistic/change">
					<span className="material-symbols-rounded text-sm">arrow_forward_ios</span>
				</Link>
			) : null}
		</>
	);
};

export default HeaderContent;
