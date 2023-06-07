import React from "react";
import BackButton from "../../components/BackButton.jsx";
import DashboardIllustration from "../../components/Dashboard/DashboardIllustration.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import DashBoardGrossIncomeChart from "../../components/Dashboard/DashBoardGrossIncomeChart.jsx";

const MobileIllustration = () => {
	return (
		<div className="text-white flex flex-row justify-center items-center z-10 mb-12">
			<div className="flex flex-col">
				<div className="mt-2 mb-2 mr-auto ml-6 text-3xl text-left font-semibold">
					Dashboard
				</div>
				<div className="mr-auto ml-6 text-sm text-left font-semibold">
					Groseria Store Semarang
				</div>
				<div className="mr-auto ml-6 text-sm text-left">
					Kota Semarang, Jawa Tengah
				</div>
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
			<div className="w-32 h-20 shadow-md rounded-md bg-green-300/80 mb-4 place-self-center text-white py-2 px-3">
				<p>Total Buyer</p>
				<p className="text-2xl">120</p>
			</div>
			<DashBoardGrossIncomeChart />
			<DashBoardGrossIncomeChart />
		</div>
	);
};

export default DashboardMobile;
