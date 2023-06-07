import React from "react";
import MobileHeader from "../../components/MobileHeader";

const HomePageMobile = () => {
	return (
		<div className="max-w-[480px] min-h-screen mx-auto bg-white overflow-hidden flex flex-col">
			<MobileHeader mobile={true} />
		</div>
	);
};

export default HomePageMobile;
