import React from "react";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";
import BackButton from "../../components/BackButton.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import PageTitle from "../../components/PageTitle.jsx";
import CreateProductPromoForm from "../../components/CreateProductPromo/CreateProductPromoForm.jsx";

const Img = ({ className }) => {
	return <img src="/assets/images/create_promotion_illustration.png" className={className} />;
};
const Illustration = () => {
	return (
		<>
			<div className="block text-white flex flex-row justify-center items-center z-10 sm:hidden">
				<div className="mt-28 mr-auto ml-6 text-3xl font-semibold mb-4 whitespace-nowrap">
					Create Promo
				</div>
				<Img className="max-w-[250px] ml-2" />
			</div>
			<div className="hidden h-full mx-12 shrink-0 sm:flex sm:flex-col sm:justify-center">
				<div className="mb-4 text-green-100 text-3xl font-light">Create Promo</div>
				<Img className="w-[400px]" />
			</div>
		</>
	);
};

const ResponsiveLogo = () => {
	return (
		<>
			<div className="block sm:hidden z-40">
				<CompanyLogo color={false} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
			<div className="hidden sm:block">
				<CompanyLogo color={true} className="w-[100px] mx-auto mb-2 z-40" />
			</div>
		</>
	);
};

const CreatePromotion = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 min-w-[480px] overflow-hidden px-8 w-full bg-white sm:bg-gray-100 sm:flex-row sm:justify-center sm:py-20 sm:max-w-full min-h-screen sm:drop-shadow-2xl ">
			<CircularBackgroundDecoration />
			<div className="z-10 relative sm:flex sm:flex-col sm:bg-green-400 sm:h-inherit sm:rounded-xl sm:p-6">
				<BackButton url={-1} color="text-green-100" />
				<Illustration />
			</div>
			<CreateProductPromoForm />
		</div>
	);
};

export default CreatePromotion;
