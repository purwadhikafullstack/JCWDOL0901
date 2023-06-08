import React from "react";
import NearestBranch from "./NearestBranch";

import { useDispatch } from "react-redux";
import { setAppLocation } from "../../redux/reducers/app/appAction";

import { promptUserPermissionForLocation } from "../../utils/geolocation";

const LocationPendingMessage = () => {
	return (
		<div className="text-green-100 flex flex-row items-center pt-1.5">
			<span className="material-symbols-rounded mr-1">move</span>
			<div className="text-green-100 font-medium z-20">Requesting location...</div>
		</div>
	);
};

const LocationDeniedMessage = () => {
	return <div className="font-semibold text-red mt-1.5">Location Access Denied</div>;
};

const Detail = ({ location }) => {
	return (
		<div className="text-green-100 flex flex-row items-center justify-items-start pt-1.5">
			{location.pending && <LocationPendingMessage />}
			{!location.granted && !location.pending && <LocationDeniedMessage />}
			{location.granted && <NearestBranch geolocation={location.geolocation} />}
		</div>
	);
};

const BranchDetail = () => {
	const [location, setLocation] = React.useState({ granted: false, pending: true });
	const dispatch = useDispatch();

	React.useEffect(() => {
		promptUserPermissionForLocation()
			.then(result => {
				const { latitude, longitude } = result.coords;
				dispatch(setAppLocation({ latitude, longitude }));
				setLocation({ granted: true, pending: false, geolocation: result.coords });
			})
			.catch(error => setLocation({ granted: false, pending: false }));
	}, []);

	return <Detail location={location} />;
};

export default BranchDetail;
