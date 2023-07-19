import React from "react";
import BranchDetail from "./BranchMenu/BranchDetail";

const BranchMenu = ({ toggleBranchModal }) => {
	return (
		<div className="flex flex-col text-sm sm:text-base md:flex-row mr-auto text-left w-1/2 pr-5">
			<div className="text-green-100 flex flex-row items-center">
				<span className="material-symbols-rounded font-thin text-lg">storefront</span>
				<div className="ml-4 font-light antialiased">Deliver from:</div>
			</div>
			<BranchDetail toggleBranchModal={toggleBranchModal} />
		</div>
	);
};

export default BranchMenu;
