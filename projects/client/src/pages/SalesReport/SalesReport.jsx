import React from "react";
import CompanyLogo from "../../components/CompanyLogo";
import SideBar from "../../components/SideBar/SideBar";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration";
import PageTitle from "../../components/PageTitle";
import SalesReportTableGroup from "../../components/SalesReport/SalesReportTableGroup";

const ResponsiveLogo = () => {
	return (
		<>
			<div className="block z-40 mt-6 sm:hidden">
				<CompanyLogo color={false} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
			<div className="hidden mt-6 sm:block">
				<CompanyLogo color={true} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
		</>
	);
};

const SalesReport = () => {
	return (
		<div className="flex flex-col mx-auto pb-10 flex-1 min-w-[480px] overflow-hidden bg-white z-10 sm:w-full">
			<SideBar>
				<div className="flex flex-col bg-white min-h-screen">
					<div className="flex flex-col z-10">
						<CircularBackgroundDecoration />
						<ResponsiveLogo />
						<PageTitle
							title="Sales Report"
							className={"text-green-100 sm:text-green-400 z-10 mb-auto"}
						/>
						<SalesReportTableGroup />
					</div>
				</div>
			</SideBar>
		</div>
	);
};

export default SalesReport;
