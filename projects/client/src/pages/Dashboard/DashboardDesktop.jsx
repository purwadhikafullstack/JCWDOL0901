import React from "react";
import DashboardIllustration from "../../components/Dashboard/DashboardIllustration.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import DashboardBranchInfo from "../../components/Dashboard/DashboardBranchInfo.jsx";
import DashboardCharts from "../../components/Dashboard/DashboardCharts.jsx";

const DesktopIllustration = () => {
	return (
		<div className="text-black flex flex-row justify-center items-center z-10 mb-12">
			<div className="flex flex-col">
				<div className="mt-2 mb-2 ml-6 text-3xl text-left font-semibold">Dashboard</div>
				<DashboardBranchInfo />
			</div>
			<DashboardIllustration className="w-[250px] pr-4" />
		</div>
	);
};

const DashboardDesktop = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] min-h-screen overflow-hidden bg-green-100">
			{/* <CircularBackgroundDecoration /> */}
			<DesktopIllustration />
			<DashboardCharts chartClass="flex flex-row justify-center" />
		</div>
	);
};

export default DashboardDesktop;
