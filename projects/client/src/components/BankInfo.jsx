import React from "react";

const BankInfo = () => {
	return (
		<div className="flex flex-col items-start bg-green-100 m-5 rounded p-6">
			<img src="/assets/images/BANK_BCA.jpg" className="w-[100px] rounded" />
			<span className="mt-3 font-bold text-xl mb-2">Bank Central Asia</span>
			<div className="grid grid-cols-2 gap-x-6 gap-y-1 text-left">
				<span className="row-span-1">Account Name:</span>
				<span className="row-span-1 font-bold">Groseria Store ID</span>
				<span className="row-span-1">Account Number:</span>
				<span className="row-span-1 font-bold">888 505 9123</span>
			</div>
		</div>
	);
};

export default BankInfo;
