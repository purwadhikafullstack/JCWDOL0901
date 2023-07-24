import React from "react";

const OrderHistoryDateConfiguration = ({ startDate, setStartDate, endDate, setEndDate }) => {
	return (
		<div className="flex flex-col items-center justify-center mb-3 ml-2 px-8 z-50">
			<div className="flex flex-row justify-start items-center">
				<div className="flex flex-col">
					<span className="text-xs text-left ml-2 mb-1 text-black">Start Date:</span>
					<input
						type="date"
						className="text-xs rounded-lg border-green-300"
						value={startDate}
						onChange={(event) => setStartDate(event.target.value)}
					/>
				</div>
				<span className="mx-2"></span>
				<div className="flex flex-col">
					<span className="text-xs text-left  ml-2 mb-1 text-black">End Date:</span>
					<input
						type="date"
						className="text-xs rounded-lg border-green-300"
						value={endDate}
						onChange={(event) => setEndDate(event.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default OrderHistoryDateConfiguration;
