import React from "react";

import BranchModalHeader from "./SelectBranchModal/BranchModalHeader";
import CurrentBranch from "./SelectBranchModal/CurrentBranch";
import BranchModalDropDown from "./SelectBranchModal/BranchModalDropDown";

const SelectBranchModal = () => {
	return (
		<div className="bg-black/30 fixed top-0 w-[480px] h-screen z-50">
			<div className="relative flex flex-col bg-white rounded-lg shadow mx-12 mt-12 pb-6 px-16">
				<BranchModalHeader />
				<CurrentBranch />
				<BranchModalDropDown />
				<div className="flex flex-row justify-center">
					<button
						className="bg-green-500 text-white px-4 py-2 rounded-lg ml-auto mr-16 font-bold"
						type="button"
					>
						Confirm
					</button>
					<button
						className="bg-red text-white px-4 py-2 rounded-lg mr-auto ml-1 font-bold"
						type="button"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default SelectBranchModal;
