import React from "react";
import BackButton from "../../components/BackButton.jsx";
import DashboardIllustration from "../../components/Dashboard/DashboardIllustration.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import DashboardBranchInfo from "../../components/Dashboard/DashboardBranchInfo.jsx";
import DashboardCards from "../../components/Dashboard/DashboardCards.jsx";
import getGrossIncome from "./helper/getGrossIncomeHelper.js";
import { useState, useEffect } from "react";
import DashboardCharts from "../../components/Dashboard/DashboardCharts.jsx";

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
	const [grossIncome, setGrossIncome] = useState({});
	useEffect(() => {
		getGrossIncome(setGrossIncome);
	}, []);
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
			<CircularBackgroundDecoration />
			<BackButton url="/admin/dashboard" color="text-white" />
			<MobileIllustration />
			<DashboardCards />
			<DashboardCharts data={grossIncome} />
		</div>
	);
};

export default DashboardMobile;
