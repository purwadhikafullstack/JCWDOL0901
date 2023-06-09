import React from "react";
import BranchName from "./BranchName";

import { useDispatch, useSelector } from "react-redux";
import { setAppLocation } from "../../redux/reducers/app/appAction";

import { promptUserPermissionForLocation } from "../../utils/geolocation";

const LocationPendingMessage = () => {
	return (
		<div className="text-green-100 flex flex-row items-center pt-1.5">
			<span className="material-symbols-rounded mr-1">move</span>
			<div className="text-green-100 font-medium z-20">Location pending...</div>
		</div>
	);
};

const LocationDeniedMessage = () => {
	return <div className="font-semibold text-red mt-1.5">Location Access Denied</div>;
};

const BranchDetail = () => {
	const dispatch = useDispatch();
	const app = useSelector(state => state.app);

	React.useEffect(() => {
		if (!app.branch.name) {
			promptUserPermissionForLocation()
				.then(result => {
					const { latitude, longitude } = result.coords;
					dispatch(setAppLocation({ latitude, longitude, granted: true, pending: false }));
				})
				.catch(error => dispatch(setAppLocation({ granted: false, pending: false })));
		}
	}, []);

	return (
		<div className="text-green-100 flex flex-row items-center justify-items-start pt-1">
			{app.location.pending && <LocationPendingMessage />}
			{!app.location.granted && !app.location.pending && <LocationDeniedMessage />}
			{app.location.granted && <BranchName />}
		</div>
	);
};

export default BranchDetail;
