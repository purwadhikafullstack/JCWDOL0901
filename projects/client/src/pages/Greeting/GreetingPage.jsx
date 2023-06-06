import React from "react";
import GreetingMobile from "./GreetingMobile";
import GreetingDesktop from "./GreetingDesktop";

const GreetingPage = () => {
	return (
		<div>
			<GreetingDesktop />
			{/* <GreetingMobile /> */}
		</div>
	);
};

export default GreetingPage;
