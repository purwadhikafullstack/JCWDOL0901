import React from "react";
import NearestBranch from "./NearestBranch";

const Branch = ({ access, location }) => {
	return access.granted ? (
		<NearestBranch location={location} />
	) : (
		<div className="font-semibold text-red mt-1.5">Location Access Denied</div>
	);
};

const BranchDropDown = ({ access, location }) => {
	return (
		<div className="text-green-100 flex flex-row items-center">
			<Branch access={access} />
		</div>
	);
};

export default BranchDropDown;
