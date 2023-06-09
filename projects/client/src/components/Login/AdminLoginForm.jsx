import React from "react";
import ErrorWarning from "../ErrorWarning";
import AdminLoginFormWithValidator from "./AdminLoginFormWithValidator";

function AdminLoginForm() {
	const [error, setError] = React.useState("");

	return (
		<div className="my-auto items-center min-w-full shrink-0 flex flex-col pb-10 px-6">
			<ErrorWarning error={error} />
			<AdminLoginFormWithValidator setError={setError} />
		</div>
	);
}

export default AdminLoginForm;
