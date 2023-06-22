import React from "react";
import MobileNavBar from "../../components/MobileNavBar";
import DesktopNavBar from "../../components/DesktopNavBar";
import CompanyLogo from "../../components/CompanyLogo";
import AccountMenu from "../../components/AccountMenu/AccountMenu";

const AccountPage = () => {
	return (
		<div className="max-w-[640px] min-h-screen mx-auto bg-white overflow-hidden flex flex-col overflow-y-hidden sm:max-w-full">
			<div className="flex flex-col sm:bg-green-200 sm:pb-4 sm:px-12">
				<CompanyLogo color={false} className="z-10 w-[40px] mx-auto my-3" clickable={false} />
				<div className="flex flex-col justify-between items-between z-10 mx-6">
					<DesktopNavBar />
				</div>
			</div>
			<div className="flex flex-col sm:px-8">
				<AccountMenu />
			</div>
			<MobileNavBar />
		</div>
	);
};

export default AccountPage;
