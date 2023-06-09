import React from "react";
import DashboardIllustration from "../../components/Dashboard/DashboardIllustration.jsx";
import DashboardBranchInfo from "../../components/Dashboard/DashboardBranchInfo.jsx";
import DashboardCharts from "../../components/Dashboard/DashboardCharts.jsx";
import SideBar from "../../components/SideBarMobile.jsx";

const MobileIllustration = () => {
	return (
		<div className="text-black flex flex-row justify-center items-center z-20 mb-12">
			<div className="flex flex-col">
				<div className="mt-2 mb-2 mr-auto text-3xl text-center font-semibold w-full text-green-300">
					Dashboard
				</div>
				<DashboardBranchInfo className="flex flex-col items-center" />
				<DashboardIllustration className="w-[200px] mr-auto ml-auto pr-4 mt-4" />
			</div>
		</div>
	);
};

const DashboardMobile = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-green-100">
			<div id="headlessui-portal-root" className="relative h-screen overflow-y-scroll">
				<SideBar />
				<MobileIllustration />
				<DashboardCharts chartClass="w-[400px] mb-10 px-4 max-w-full" />
			</div>
		</div>
	);
};

export default DashboardMobile;
