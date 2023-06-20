import React from "react";

const LoadingLogistic = () => {
	return (
		<div className="flex flex-col">
			<div className="font-bold text-left bg-green-300 text-green-100 pl-5 py-2">Loading...</div>
			<div className="animate-pulse flex flex-col pt-5 pb-6 pl-5">
				<div className="h-3.5 w-56 bg-gray-200 rounded col-start-1"></div>
				<div className="flex flex-row items-center my-4">
					<div className="h-3 w-40 bg-gray-200 rounded "></div>
					<div className="h-2 w-20 ml-4 bg-gray-200 rounded "></div>
				</div>
				<div className="h-2.5 w-64 bg-gray-200 rounded"></div>
			</div>
		</div>
	);
};

export default LoadingLogistic;
