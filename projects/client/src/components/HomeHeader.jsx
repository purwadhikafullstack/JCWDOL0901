import React from "react";
import CircularBackgroundDecoration from "./CircularBackgroundDecoration";
import CompanyLogo from "./CompanyLogo";
import AddressMenu from "./AddressMenu";
import SearchBar from "./SearchBar";
import BranchMenu from "./BranchMenu";
import DesktopNavBar from "./DesktopNavBar";

const HomeHeader = ({ toggleBranchModal }) => {
	return (
		<div className="flex flex-col sm:bg-green-200 sm:pb-2 sm:px-2">
			<CircularBackgroundDecoration />
			<div className="flex flex-col justify-between items-between z-10 mx-6">
				<DesktopNavBar />
				<div className="flex flex-row justify-between items-start mt-2 md:hidden">
					<CompanyLogo color={false} className="z-10 w-[40px] my-auto mr-6 ml-2" clickable={false} />
					<SearchBar />
				</div>
				<div className="flex flex-row justify-between items-start">
					<BranchMenu toggleBranchModal={toggleBranchModal} />
					<AddressMenu />
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;
