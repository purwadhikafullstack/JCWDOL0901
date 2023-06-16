import React from "react";
import CategoryCarousel from "../../components/CategoryCarousel";
import ProductsRecommendation from "../../components/ProductsRecommendation";
import MobileNavBar from "../../components/MobileNavBar";
import Footer from "../../components/Footer";
import SelectBranchModal from "../../components/SelectBranchModal";
import ProductsHeader from "../../components/Products/ProductsHeader";
const ProductPage = () => {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<div className="max-w-[640px] min-h-screen mx-auto bg-white overflow-hidden flex flex-col overflow-y-hidden sm:max-w-full">
			{showModal && <SelectBranchModal toggleBranchModal={setShowModal} />}
			<ProductsHeader toggleBranchModal={setShowModal} />
			<div className="flex flex-col sm:px-8">
				<CategoryCarousel />
				<ProductsRecommendation />
			</div>
			<MobileNavBar />
		</div>
	);
};

export default ProductPage;
