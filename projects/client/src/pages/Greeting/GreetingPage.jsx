import React from "react";
import Greeting from "./Greeting.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const GreetingPage = () => {
	const location = useLocation();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!location?.state?.fromRegister) navigate("/");
	}, []);

	return location?.state?.email && <Greeting location={location} navigate={navigate} />;
};

export default GreetingPage;
