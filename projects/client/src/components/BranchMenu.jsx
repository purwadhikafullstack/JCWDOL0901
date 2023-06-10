import React from "react";
import BranchDetail from "./BranchMenu/BranchDetail";

const BranchMenu = ({ toggleBranchModal }) => {
	return (
		<div className="flex-col mr-auto text-left">
			<div className="text-green-100 flex flex-row items-center">
				<span className="material-symbols-rounded font-thin text-lg">storefront</span>
				<div className="mx-1.5 font-light antialiased">Deliver from</div>
			</div>
			<BranchDetail toggleBranchModal={toggleBranchModal} />
		</div>
	);
};

export default BranchMenu;
