import React from "react";
import BackButton from "../../components/BackButton.jsx";
import CategoryIllustration from "../../components/Category/CategoryIllustration.jsx";
import CreateCategoryForm from "../../components/Category/CreateCategoryForm.jsx";
import CircularBackgroundDecoration from "../../components/CircularBackgroundDecoration.jsx";

const MobileIllustration = () => {
	return (
		<div className="text-green-100 flex flex-row justify-center items-center z-50 mb-12">
			<div className="mt-10 mr-auto ml-6 text-3xl text-left font-semibold">
				Create <br /> Category
			</div>
			<CategoryIllustration className="w-[200px] mr-auto ml-auto pr-4" />
		</div>
	);
};

const CreateCategoryMobile = () => {
	return (
		<div className="flex flex-col mx-auto flex-1 max-w-[480px] min-h-screen overflow-hidden bg-white">
			<CircularBackgroundDecoration />
			<BackButton url="/admin/dashboard" color="text-white" />
			<MobileIllustration />
			<CreateCategoryForm />
		</div>
	);
};

export default CreateCategoryMobile;
