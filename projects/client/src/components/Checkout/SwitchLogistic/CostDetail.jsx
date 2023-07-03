import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogistic } from "../../../redux/reducers/checkout/checkoutAction.js";

const CostDetail = ({ costs, courier }) => {
	const checkout = useSelector((state) => state.checkout);
	const dispatch = useDispatch();

	return costs.map((logistic, index) => {
		return (
			<div
				key={index}
				className="flex flex-row items-center justify-between w-full px-10 border-b border-dotted"
				onClick={() => dispatch(setLogistic({ logistic, courier }))}
			>
				<div className="flex flex-col py-2">
					<span className="font-semibold text-lg text-left">{logistic.service}</span>
					<span className="text-left mt-2 mb-1">
						Estimasi pengiriman: {logistic.cost[0].etd.split(" ")[0]} Hari
					</span>
					<span className="text-left uppercase font-semibold text-green-300">
						Rp. {logistic.cost[0].value.toLocaleString("id")}
					</span>
				</div>
				<input type="radio" name="select_logistic" checked={checkout.logistic.service === logistic.service} />
			</div>
		);
	});
};

export default CostDetail;
