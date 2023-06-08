import React from "react";
import DashboardIllustration from "../../components/Dashboard/DashboardIllustration.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import DashboardBranchInfo from "../../components/Dashboard/DashboardBranchInfo.jsx";
import DashboardCharts from "../../components/Dashboard/DashboardCharts.jsx";
import SideBar from "../../components/SideBarMobile.jsx";

const MobileIllustration = () => {
	return (
		<div className="text-black flex flex-row justify-center items-center z-10 mb-12">
			<div className="flex flex-col">
				<div className="mt-2 mb-2 mr-auto ml-6 text-3xl text-left font-semibold">Dashboard</div>
				<DashboardBranchInfo />
			</div>
			<DashboardIllustration className="w-[250px] mr-auto ml-auto pr-4" />
		</div>
	);
};

const DashboardMobile = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
			<SideBar>
				<MobileIllustration />
				<DashboardCharts chartClass="w-[400px] mt-10 mb-2 px-4 max-w-full" />
			</SideBar>
		</div>
	);
};

export default DashboardMobile;
