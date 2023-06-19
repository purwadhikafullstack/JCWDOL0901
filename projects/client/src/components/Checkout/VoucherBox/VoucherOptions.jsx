import React from "react";
import { getMaxDiscount, getMinSpend } from "../handlers/checkoutHandler";

const Period = ({ data }) => {
	return (
		<span className="flex flex-row items-center mt-2">
			<span class="material-symbols-rounded text-lg mr-1.5">schedule</span>
			<span>
				Periode {data?.Voucher?.start_at.split("T")[0]} - {data?.Voucher?.expired_at || "Selamanya"}
			</span>
		</span>
	);
};

const Spending = ({ data }) => {
	return (
		<span className="">
			<span class="material-symbols-rounded text-lg mr-1.5">payments</span>
			<span className="text-green-400 mr-2">{getMaxDiscount(data)},</span>
			<span className="text-[#f47229]">{getMinSpend(data)}</span>
		</span>
	);
};

const VoucherOptions = ({ vouchers }) => {
	return vouchers.map((data, index) => {
		return (
			<div key={index} className="flex flex-row items-center justify-between w-full px-6 border-b border-dotted">
				<div className="flex flex-col py-3">
					<span className="font-semibold text-lg text-left">{data.Voucher.name}</span>
					<span className="text-left mt-2 mb-1">{data.Voucher.description}</span>
					<span className="text-left font-light">
						<Period data={data} />
						<Spending data={data} />
					</span>
				</div>
				<input type="radio" name="select_voucher" />
			</div>
		);
	});
};

export default VoucherOptions;
