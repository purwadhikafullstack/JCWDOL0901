import React from "react";
import BackButton from "../../components/BackButton.jsx";
import CategoryIllustration from "../../components/Category/CategoryIllustration.jsx";
import CreateCategoryForm from "../../components/Category/CreateCategoryForm.jsx";
import CompanyLogo from "../../components/CompanyLogo.jsx";

const Illustration = () => {
	return (
		<div className="my-auto mx-12 flex flex-row sm:flex-col items-center">
			<div className="mb-10 text-green-100 text-2xl sm:text-3xl font-medium text-left sm:text-center pr-4">
				Create Category
			</div>
			<CategoryIllustration className="w-[160px] sm:w-[350px] pb-12 mx-auto" />
		</div>
	);
};

const CreateCategoryPage = () => {
	return (
		<div className="bg-green-100 flex items-center justify-center h-screen">
			<div className="flex flex-col sm:flex-row bg-white rounded-lg h-screen sm:h-auto justify-between">
				<div className="sm:bg-green-200 z-10 rounded-t-lg sm:rounded-tr-none rounded-tr-lg sm:rounded-l-lg bg-green-200">
					<BackButton url={-1} color="text-green-100" />
					<Illustration />
				</div>
				<div className="bg-white rounded-r-lg pb-4">
					<div className="flex justify-center py-4">
						<CompanyLogo color="true" className="mt-8 w-[75px] cursor-pointer hidden sm:block" />
					</div>
					<CreateCategoryForm />
				</div>
			</div>
		</div>
	);
};

export default CreateCategoryPage;
