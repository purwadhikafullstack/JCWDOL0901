import React from "react";
import HomeHeader from "../../components/HomeHeader";
import PromoCarousel from "../../components/PromoCarousel";
import CategoryCarousel from "../../components/CategoryCarousel";
import ProductsRecommendation from "../../components/ProductsRecommendation";
import MobileNavBar from "../../components/MobileNavBar";
import Footer from "../../components/Footer";
import SelectBranchModal from "../../components/SelectBranchModal";
import DesktopHeader from "../../components/DesktopHeader";
const HomePage = () => {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<div className="max-w-[640px] min-h-screen mx-auto bg-white overflow-hidden flex flex-col overflow-y-hidden sm:max-w-full">
			{showModal && <SelectBranchModal toggleBranchModal={setShowModal} />}
			<HomeHeader toggleBranchModal={setShowModal} />
			<div className="flex flex-col sm:px-8">
				<PromoCarousel />
				<CategoryCarousel />
				<ProductsRecommendation />
			</div>
			<MobileNavBar />
			<Footer />
		</div>
	);
};

export default HomePage;
