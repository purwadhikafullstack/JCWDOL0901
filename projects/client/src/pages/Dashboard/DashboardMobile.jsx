import React from "react";
import BackButton from "../../components/BackButton.jsx";
import DashboardIllustration from "../../components/Dashboard/DashboardIllustration.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import DashBoardGrossIncomeChart from "../../components/Dashboard/DashBoardGrossIncomeChart.jsx";
import DashboardBranchInfo from "../../components/Dashboard/DashboardBranchInfo.jsx";
import DashboardCard from "../../components/Dashboard/DashboardCard.jsx";
import { rupiah } from "../../helper/rupiah.js";

const MobileIllustration = () => {
	return (
		<div className="text-white flex flex-row justify-center items-center z-10 mb-12">
			<div className="flex flex-col">
				<div className="mt-2 mb-2 mr-auto ml-6 text-3xl text-left font-semibold">
					Dashboard
				</div>
				<DashboardBranchInfo />
			</div>
			<DashboardIllustration className="w-[250px] mr-auto ml-auto pr-4" />
		</div>
	);
};

const DashboardMobile = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
			<CircularBackgroundDecoration />
			<BackButton url="/admin/dashboard" color="text-white" />
			<MobileIllustration />
			<h1 className="mb-2">All time</h1>
			<div className="mx-12 flex flex-row gap-2">
				<DashboardCard title="Buyer" value="120" valueSize="text-xl" />
				<DashboardCard
					title="Gross Income"
					value={rupiah(5400000)}
					valueSize="text-md"
				/>
				<DashboardCard title="Product Sold" value="2541" valueSize="text-xl" />
			</div>
			<DashBoardGrossIncomeChart />
			<DashBoardGrossIncomeChart />
		</div>
	);
};

export default DashboardMobile;
