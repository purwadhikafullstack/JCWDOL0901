import React from "react";
import DashboardIllustration from "../../components/Dashboard/DashboardIllustration.jsx";
import DashboardBranchInfo from "../../components/Dashboard/DashboardBranchInfo.jsx";
import DashboardCharts from "../../components/Dashboard/DashboardCharts.jsx";
import SideBar from "../../components/SideBarDesktop.jsx";

const DesktopIllustration = () => {
	return (
		<div className="text-black flex flex-row gap-10 justify-center items-center z-10 mb-12">
			<div className="flex flex-col">
				<div className="mt-2 mb-2 text-3xl text-left font-semibold">Dashboard</div>
				<DashboardBranchInfo className="text-left" />
			</div>
			<DashboardIllustration className="w-[250px] pr-4" />
		</div>
	);
};

const DashboardDesktop = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] min-h-screen overflow-hidden bg-green-100">
			<SideBar>
				<DesktopIllustration />
				<DashboardCharts containerClass="" chartClass="w-[800px] mt-10 mb-20 mx-10 max-w-full" />
			</SideBar>
		</div>
	);
};

export default DashboardDesktop;
