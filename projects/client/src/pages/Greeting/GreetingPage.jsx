import React from "react";
import GreetingMobile from "./GreetingMobile";
import GreetingDesktop from "./GreetingDesktop";
import { useLocation, useNavigate } from "react-router-dom";

const GreetingPage = () => {
	const location = useLocation();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!location?.state?.fromRegister) navigate("/");
	}, []);

	return (
		location?.state?.email && (
			<div>
				<GreetingDesktop location={location} navigate={navigate} />
				{/* <GreetingMobile location={location} navigate={navigate} /> */}
			</div>
		)
	);
};

export default GreetingPage;
