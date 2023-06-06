import React from "react";
import RegisterRedirectButton from "./RegisterRedirectButton";
import RegisterFormWithValidator from "./RegisterFormWithValidator";
import ErrorWarning from "../ErrorWarning";

const RegisterForm = () => {
	const [error, setError] = React.useState("");

	return (
		<div className="mt-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-6">
			<ErrorWarning error={error} />
			<RegisterFormWithValidator setError={setError} />
			<RegisterRedirectButton />
		</div>
	);
};

export default RegisterForm;
