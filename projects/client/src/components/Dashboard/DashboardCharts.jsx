import DashboardCards from "./DashboardCards";
import DashboardGrossIncomeChart from "./DashboardGrossIncomeChart";
import DashboardProductSoldChart from "./DashboardProductSoldChart";
import getDashboardData from "./helper/getDashboardDataHelper.js";
import { useState, useEffect } from "react";

const DashboardCharts = ({ chartClass }) => {
	const [dashboardData, setDashboardData] = useState({});
	useEffect(() => {
		getDashboardData(setDashboardData);
	}, []);
	return (
		<>
			<DashboardCards />
			<h1 className="mt-4 text-green-400 font-bold text-xl">Last 7 Days</h1>
			<div className={chartClass}>
				<DashboardGrossIncomeChart data={dashboardData} />
				<DashboardProductSoldChart data={dashboardData} />
			</div>
		</>
	);
};

export default DashboardCharts;
