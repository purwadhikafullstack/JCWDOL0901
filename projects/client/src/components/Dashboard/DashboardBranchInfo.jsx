import { useState, useEffect } from "react";
import getBranchInfo from "./helper/getBranchInfoHelper";

const DashboardBranchInfo = () => {
	const [branchInfo, setBranchInfo] = useState({});
	useEffect(() => {
		getBranchInfo(setBranchInfo);
	}, []);
	return (
		<>
			<div className="mr-auto ml-6 text-md text-left font-bold mb-1">{branchInfo.name}</div>
			<div className="mr-auto ml-6 text-xs text-left">
				{`${branchInfo.City?.type} ${branchInfo.City?.name}`}
			</div>
			<div className="mr-auto ml-6 text-xs text-left">
				{`Provinsi ${branchInfo.City?.Province.name}`}
			</div>
		</>
	);
};

export default DashboardBranchInfo;
