import React from "react";
import DashboardIllustration from "../../components/Dashboard/DashboardIllustration.jsx";
import DashboardBranchInfo from "../../components/Dashboard/DashboardBranchInfo.jsx";
import DashboardCharts from "../../components/Dashboard/DashboardCharts.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";

const Illustration = () => {
	return (
		<div className="text-black flex flex-row justify-center items-center z-10 mb-12">
			<div className="flex flex-col sm:flex-row sm:gap-12">
				<div className="flex flex-col justify-center">
					<div className="mt-2 mb-2 mr-auto text-3xl sm:text-5xl text-center sm:text-left py-4 font-semibold w-full text-green-300">
						Dashboard
					</div>
					<DashboardBranchInfo className="flex flex-col items-center sm:text-left" />
				</div>
				<DashboardIllustration className="w-[200px] sm:w-[250px] hover:scale-110 duration-700 transition" />
			</div>
		</div>
	);
};

const CreateBranchAdminPage = () => {
	return (
		<div>
			<div className="flex flex-col mx-auto flex-1 min-h-screen overflow-hidden bg-green-100 z-10">
				<SideBar>
					<Illustration />
					<DashboardCharts chartClass="w-[400px] mb-10 px-4 max-w-full sm:w-[800px] sm:mt-10 sm:mb-20 sm:mx-10" />
				</SideBar>
			</div>
		</div>
	);
};

export default CreateBranchAdminPage;
