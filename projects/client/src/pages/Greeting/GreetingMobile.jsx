import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GreetingMessage from "../../components/Greeting/GreetingMessage";
import CompanyLogo from "../../components/CompanyLogo";
const GreetingMobile = () => {
	const location = useLocation();
	const navigate = useNavigate();

	React.useEffect(() => {
		if (!location?.state?.fromRegister) navigate("/");
	}, []);

	return (
		location?.state?.email && (
			<div className="flex flex-col items-center mx-auto pb-24 w-[480px] h-screen bg-white flex flex-col">
				<CompanyLogo color={true} size="50px" paddingY="5" />
				<GreetingMessage navigate={navigate} email={location?.state?.email} />
			</div>
		)
	);
};

export default GreetingMobile;
