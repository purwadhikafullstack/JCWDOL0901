import React from "react";
import BackButton from "../../components/BackButton.jsx";
import CategoryIllustration from "../../components/Category/CategoryIllustration.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";
import { useLocation } from "react-router-dom";
import UpdateProductForm from "../../components/Products/UpdateProductForm.jsx";

const Illustration = () => {
	return (
		<div className="my-auto mx-12 flex flex-row sm:flex-col items-center">
			<div className="mb-10 text-green-100 text-2xl sm:text-3xl font-medium text-left sm:text-center pr-4">
				Update Product
			</div>
			<CategoryIllustration className="w-[160px] sm:w-[350px] pb-12 mx-auto sm:mt-40" />
		</div>
	);
};

const UpdateProduct = () => {
	const item = useLocation().state;
	return (
		<div className="bg-green-100 flex items-center justify-center">
			<div className="flex flex-col sm:flex-row bg-white rounded-lg h-screen sm:h-auto justify-between">
				<div className="sm:bg-green-500 z-10 rounded-t-lg sm:rounded-tr-none rounded-tr-lg sm:rounded-l-lg bg-green-500">
					<BackButton url={-1} color="text-green-100" />
					<Illustration />
				</div>
				<div className="bg-white rounded-r-lg pb-4">
					<div className="flex justify-center py-4">
						<CompanyLogo color="true" className="mt-8 w-[75px] cursor-pointer hidden sm:block" />
					</div>
					<UpdateProductForm item={item} />
				</div>
			</div>
		</div>
	);
};

export default UpdateProduct;
