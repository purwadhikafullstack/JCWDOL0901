import DashboardCards from "./DashboardCards";
import DashboardGrossIncomeChart from "./DashboardGrossIncomeChart";
import DashboardProductSoldChart from "./DashboardProductSoldChart";
import getDashboardData from "./helper/getDashboardDataHelper.js";
import { useState, useEffect } from "react";

const DashboardCharts = ({ containerClass, chartClass }) => {
	const [dashboardData, setDashboardData] = useState({});
	useEffect(() => {
		getDashboardData(setDashboardData);
	}, []);
	return (
		<>
			<DashboardCards />
			<h1 className="mt-8 text-green-400 font-bold text-xl mb-6">Last 7 Days</h1>
			<div className={containerClass}>
				<DashboardGrossIncomeChart data={dashboardData} chartClass={chartClass} />
				<DashboardProductSoldChart data={dashboardData} chartClass={chartClass} />
			</div>
		</>
	);
};

export default DashboardCharts;
