import React from "react";
import ErrorWarning from "../ErrorWarning";
import CreateProductPromoFormWithValidator from "./CreateProductPromoFormWithValidator";

const CreateProductPromoForm = () => {
	const [error, setError] = React.useState("");

	return (
		<div className="mt-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-6">
			<ErrorWarning error={error} />
			<CreateProductPromoFormWithValidator setError={setError} />
		</div>
	);
};

export default CreateProductPromoForm;
