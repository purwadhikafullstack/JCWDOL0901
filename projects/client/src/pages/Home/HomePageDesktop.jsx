import React from "react";
import PromoCarousel from "../../components/PromoCarousel";
import CategoryCarousel from "../../components/CategoryCarousel";
import ProductsRecommendation from "../../components/ProductsRecommendation";
import Footer from "../../components/Footer";
import SelectBranchModal from "../../components/SelectBranchModal";
import DesktopHeader from "../../components/DesktopHeader";

const HomePageDesktop = () => {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<div className="min-w-[480px] min-h-screen mx-auto bg-white overflow-hidden flex flex-col overflow-y-hidden">
			{showModal && <SelectBranchModal toggleBranchModal={setShowModal} />}
			<DesktopHeader toggleBranchModal={setShowModal} />
			<PromoCarousel />
			<div className="shrink-1 px-32">
				<CategoryCarousel />
				<ProductsRecommendation />
			</div>
			<Footer />
		</div>
	);
};

export default HomePageDesktop;
