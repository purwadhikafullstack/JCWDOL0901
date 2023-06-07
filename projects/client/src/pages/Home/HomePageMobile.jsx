import React from "react";
import MobileHeader from "../../components/MobileHeader";
import PromoCarousel from "../../components/PromoCarousel";
import CategoryCarousel from "../../components/CategoryCarousel";
import TopProductsCarousel from "../../components/TopProductsCarousel";
import MobileNavBar from "../../components/MobileNavBar";

const HomePageMobile = () => {
	return (
		<div className="max-w-[480px] min-h-screen mx-auto bg-white overflow-hidden flex flex-col">
			<MobileHeader mobile={true} />
			<PromoCarousel />
			<CategoryCarousel />
			<TopProductsCarousel />
			<MobileNavBar />
		</div>
	);
};

export default HomePageMobile;
