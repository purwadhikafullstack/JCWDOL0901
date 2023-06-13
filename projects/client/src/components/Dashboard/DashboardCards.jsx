import DashboardCard from "./DashboardCard";
import { rupiah } from "../../helper/rupiah";
import { useState, useEffect } from "react";
import getAllTimeData from "./helper/getAllTimeDataHelper.js";

const DashboardCards = ({}) => {
	const [allTimeData, setAllTimeData] = useState({});
	useEffect(() => {
		getAllTimeData(setAllTimeData);
	}, []);
	return (
		<>
			<h1 className="mb-6 text-green-400 font-bold text-xl sm:text-2xl">All time</h1>
			<div className="mx-12 flex flex-row gap-2 sm:gap-4 justify-center">
				<DashboardCard
					title="Buyer"
					value={allTimeData.totalBuyer}
					valueSize="text-xl sm:text-3xl px-2 font-bold"
				/>
				<DashboardCard
					title="Gross Income"
					value={rupiah(allTimeData.allTimeGrossIncome || 0)}
					valueSize="text-sm sm:text-2xl px-2 font-bold"
				/>
				<DashboardCard
					title="Product Sold"
					value={allTimeData.allTimeProductSold}
					valueSize="text-xl sm:text-3xl px-2 font-bold"
				/>
			</div>
		</>
	);
};

export default DashboardCards;
