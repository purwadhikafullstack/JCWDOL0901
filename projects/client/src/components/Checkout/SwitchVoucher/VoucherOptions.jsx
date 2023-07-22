import React from "react";
import { getMaxDiscount, getMinSpend } from "../handlers/checkoutHandler";
import { applyVoucher } from "../../../redux/reducers/checkout/checkoutAction";
import { useSelector } from "react-redux";

const Period = ({ data }) => {
	return (
		<span className="flex flex-row items-center mt-2">
			<span className="material-symbols-rounded text-lg mr-1.5">schedule</span>
			<span>
				Periode {data?.Voucher?.start_at.split("T")[0]} - {data?.Voucher?.expired_at || "Selamanya"}
			</span>
		</span>
	);
};

const Spending = ({ data }) => {
	return (
		<span className="">
			<span className="material-symbols-rounded text-lg mr-1.5">payments</span>
			<span className="text-green-400 mr-2">{getMaxDiscount(data)},</span>
			<span className="text-[#f47229]">{getMinSpend(data)}</span>
		</span>
	);
};

const VoucherOptions = ({ vouchers, dispatch, globalState }) => {
	const summary = useSelector((state) => state.checkout.summary);
	return vouchers.map((data, index) => {
		const disabled = data?.Voucher?.min_spend > summary.total;

		return (
			<div
				key={index}
				className="flex flex-row items-center justify-between w-full px-6 border-b border-dotted"
				onClick={() => !disabled && dispatch(applyVoucher(data))}
			>
				<div className="flex flex-col py-3">
					<span className="font-semibold text-lg text-left">{data.Voucher.name}</span>
					<span className="text-left mt-2 mb-1">{data.Voucher.description}</span>
					<span className="text-left font-light">
						<Period data={data} />
						<Spending data={data} />
					</span>
				</div>
				<input
					type="radio"
					name="select_voucher"
					className="border border-green-400 checked:bg-green-400 disabled:opacity-20 disabled:bg-gray-200 "
					disabled={disabled}
					checked={globalState?.checkout?.voucher?.user_voucher_id === data.id}
				/>
			</div>
		);
	});
};

export default VoucherOptions;
