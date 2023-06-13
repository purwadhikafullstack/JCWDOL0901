import React from "react";
import ErrorWarning from "../ErrorWarning";
import CreateProductPromoFormWithValidator from "./CreateProductPromoFormWithValidator";
import CompanyLogo from "../CompanyLogo";

const CreateProductPromoForm = () => {
	const [error, setError] = React.useState("");

	return (
		<div className="flex flex-col items-center min-w-fit shrink-0 px-6 bg-white z-40 sm:h-inherit sm:px-24 sm:py-8 sm:justify-center sm:rounded-r-xl">
			<CompanyLogo color={true} className="w-[100px] hidden sm:block sm:mb-4" />
			<ErrorWarning error={error} />
			<CreateProductPromoFormWithValidator setError={setError} />
		</div>
	);
};

export default CreateProductPromoForm;
