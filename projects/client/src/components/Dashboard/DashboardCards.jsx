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
			<h1 className="mb-2 text-green-400 font-bold text-xl">All time</h1>
			<div className="mx-12 flex flex-row gap-2 justify-center">
				<DashboardCard title="Buyer" value={allTimeData.totalBuyer} valueSize="text-xl font-bold" />
				<DashboardCard
					title="Gross Income"
					value={rupiah(allTimeData.allTimeGrossIncome || 0)}
					valueSize="text-sm font-bold"
				/>
				<DashboardCard
					title="Product Sold"
					value={allTimeData.allTimeProductSold}
					valueSize="text-xl font-bold"
				/>
			</div>
		</>
	);
};

export default DashboardCards;
