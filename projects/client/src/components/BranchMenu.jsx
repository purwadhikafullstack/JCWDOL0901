import React from "react";
import BranchDropDown from "./BranchMenu/BranchDropDown";

const BranchMenu = () => {
	return (
		<div className="flex-col">
			<div className="text-green-100 flex flex-row items-center">
				<span class="material-symbols-rounded font-thin text-lg">
					storefront
				</span>
				<div className="mx-1.5 font-light antialiased">Deliver from</div>
			</div>
			<BranchDropDown />
		</div>
	);
};

export default BranchMenu;
