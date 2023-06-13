import React from "react";
import CircularBackgroundDecoration from "./CircularBackgroundDecoration";
import CompanyLogo from "./CompanyLogo";
import AddressMenu from "./AddressMenu";
import SearchBar from "./SearchBar";
import BranchMenu from "./BranchMenu";
import DesktopNavBar from "./DesktopNavBar";

const HomeHeader = ({ toggleBranchModal }) => {
	return (
		<div className="flex flex-col sm:bg-green-200 sm:pb-4">
			<CircularBackgroundDecoration />
			<CompanyLogo color={false} className="z-10 w-[40px] mx-auto my-3" clickable={false} />
			<div className="flex flex-col justify-between items-between z-10 mx-6">
				<DesktopNavBar />
				<SearchBar />
				<div className="flex flex-row justify-between items-start mt-2">
					<BranchMenu toggleBranchModal={toggleBranchModal} />
					<AddressMenu />
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;
