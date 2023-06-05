import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GreetingMessage from "../../components/Greeting/GreetingMessage";

const GreetingMobile = () => {
	const location = useLocation();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!location?.state?.fromRegister) navigate("/");
	}, []);

	return (
		<div className="mx-auto w-[480px] h-screen bg-white flex flex-col">
			<GreetingMessage navigate={navigate} email={location?.state?.email} />
		</div>
	);
};

export default GreetingMobile;
