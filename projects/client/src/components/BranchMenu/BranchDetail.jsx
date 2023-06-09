import React from "react";
import BranchName from "./BranchName";

import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../../redux/reducers/user/userAction";

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

const BranchDetail = ({ toggleBranchModal }) => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);

	React.useEffect(() => {
		if (!user.branch.name) {
			promptUserPermissionForLocation()
				.then(result => {
					const { latitude, longitude } = result.coords;
					dispatch(setUserLocation({ latitude, longitude, granted: true, pending: false }));
				})
				.catch(error => dispatch(setUserLocation({ granted: false, pending: false })));
		}
	}, []);

	return (
		<div className="text-green-100 flex flex-row items-center justify-items-start pt-1">
			{user.location.pending && <LocationPendingMessage />}
			{!user.location.granted && !user.location.pending && <LocationDeniedMessage />}
			{user.location.granted && <BranchName toggleBranchModal={toggleBranchModal} />}
		</div>
	);
};

export default BranchDetail;
