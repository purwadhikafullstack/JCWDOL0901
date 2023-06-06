import React from "react";

import GreetingMessage from "../../components/Greeting/GreetingMessage";
import CompanyLogo from "../../components/CompanyLogo";

const GreetingDesktop = ({ location, navigate }) => {
	return (
		<div className="flex flex-col items-center mx-auto pb-24 min-w-[480px] h-screen bg-white flex flex-col">
			<CompanyLogo color={true} className={"w-[80px] my-10 cursor-pointer"} />
			<div>
				<GreetingMessage navigate={navigate} email={location?.state?.email} />
			</div>
		</div>
	);
};

export default GreetingDesktop;
