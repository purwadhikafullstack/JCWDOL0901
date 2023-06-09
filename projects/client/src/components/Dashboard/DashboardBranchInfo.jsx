import { useState, useEffect } from "react";
import getBranchInfo from "./helper/getBranchInfoHelper";

const DashboardBranchInfo = ({ className }) => {
	const [branchInfo, setBranchInfo] = useState({});
	useEffect(() => {
		getBranchInfo(setBranchInfo);
	}, []);
	return (
		<div className={className}>
			<div className={`mr-auto text-md sm:text-2xl font-bold mb-1 w-full`}>{branchInfo.name}</div>
			<div
				className={`mr-auto text-xs sm:text-base w-full`}
			>{`${branchInfo.City?.type} ${branchInfo.City?.name}`}</div>
			<div
				className={`mr-auto text-xs sm:text-base w-full`}
			>{`Provinsi ${branchInfo.City?.Province.name}`}</div>
		</div>
	);
};

export default DashboardBranchInfo;
