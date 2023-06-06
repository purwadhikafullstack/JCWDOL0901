import React from "react";
import GreetingMessage from "../../components/Greeting/GreetingMessage";
import CompanyLogo from "../../components/CompanyLogo";

const GreetingMobile = ({ location, navigate }) => {
	return (
		<div className="flex flex-col items-center mx-auto pb-24 w-[480px] h-screen bg-white flex flex-col">
			<CompanyLogo color={true} className={"w-[80px] my-10 cursor-pointer"} />
			<GreetingMessage navigate={navigate} email={location?.state?.email} />
		</div>
	);
};

export default GreetingMobile;
