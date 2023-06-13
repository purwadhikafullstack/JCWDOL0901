import React from "react";
import BackButton from "../../components/BackButton";
import PageTitle from "../../components/PageTitle";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import SideBar from "../../components/SideBar/SideBar";
import StockTableGroup from "../../components/ProductStock/StockTableGroup";

const ResponsiveLogo = () => {
	return (
		<>
			<div className="block sm:hidden z-40">
				<CompanyLogo color={false} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
			<div className="hidden sm:block">
				<CompanyLogo color={true} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
		</>
	);
};

const ManageStock = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] min-h-screen overflow-y-scroll overflow-hidden bg-white z-10 sm:w-full">
			<SideBar>
				<div className="flex flex-col h-screen z-10">
					<CircularBackgroundDecoration />
					<BackButton url="/admin/dashboard" color="block text-green-100 z-50 sm:hidden" />
					<ResponsiveLogo />
					<PageTitle
						title="Manage Inventory Stock"
						color={"text-green-100 sm:text-green-4  z-10"}
					/>
					<StockTableGroup />
				</div>
			</SideBar>
		</div>
	);
};

export default ManageStock;
