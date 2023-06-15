import React from "react";
import ChangePasswordFormWithValidator from "./ChangePasswordFormWithValidator";
import ErrorWarning from "../ErrorWarning";
import CompanyLogo from "../CompanyLogo.jsx";

const ChangePasswordForm = () => {
	const [error, setError] = React.useState("");

	return (
		<div className="flex flex-col items-center min-w-fit shrink-0 px-6 bg-white sm:h-inherit sm:px-24 sm:py-8 sm:justify-center sm:rounded-r-xl">
			<div className="w-80">
				<CompanyLogo color={true} className="w-[100px] hidden mx-auto sm:block sm:mb-4" />
				<ErrorWarning error={error} />
				<ChangePasswordFormWithValidator setError={setError} />
			</div>
		</div>
	);
};

export default ChangePasswordForm;
