import React from "react";
import MobileHeader from "../../components/MobileHeader";
import PromoCarousel from "../../components/PromoCarousel";
import CategoryCarousel from "../../components/CategoryCarousel";
import ProductsRecommendation from "../../components/ProductsRecommendation";
import MobileNavBar from "../../components/MobileNavBar";
import MobileFooter from "../../components/MobileFooter";
import SelectBranchModal from "../../components/SelectBranchModal";

const HomePageMobile = () => {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<div className="max-w-[480px] min-h-screen mx-auto bg-white overflow-hidden flex flex-col overflow-y-hidden">
			{showModal && <SelectBranchModal toggleBranchModal={setShowModal} />}
			<MobileHeader toggleBranchModal={setShowModal} />
			<PromoCarousel />
			<CategoryCarousel />
			<ProductsRecommendation />
			<MobileNavBar />
			<MobileFooter />
		</div>
	);
};

export default HomePageMobile;
