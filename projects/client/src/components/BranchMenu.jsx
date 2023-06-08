import React from "react";
import BranchDropDown from "./BranchMenu/BranchDropDown";
import { promptUserPermissionForLocation } from "../utils/geolocation";

const PendingMessage = () => {
	return (
		<div className="text-green-100 flex flex-row items-center pt-1.5">
			<span class="material-symbols-rounded mr-1">move</span>
			<div className="text-green-100 font-medium z-20">Requesting location...</div>
		</div>
	);
};
const BranchMenu = () => {
	const [access, setAccess] = React.useState({ granted: false, pending: true });
	const [location, setLocation] = React.useState({});

	React.useEffect(() => {
		promptUserPermissionForLocation()
			.then(result => setAccess({ granted: true, pending: false }))
			.catch(error => setAccess({ granted: false, pending: false }));
	}, []);

	return (
		<div className="flex-col">
			<div className="text-green-100 flex flex-row items-center">
				<span className="material-symbols-rounded font-thin text-lg">storefront</span>
				<div className="mx-1.5 font-light antialiased">Deliver from</div>
			</div>
			{access.pending ? <PendingMessage /> : <BranchDropDown access={access} location={location} />}
		</div>
	);
};

export default BranchMenu;
