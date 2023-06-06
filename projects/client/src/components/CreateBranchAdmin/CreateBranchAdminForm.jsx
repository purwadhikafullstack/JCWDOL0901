import React from "react";
import CreateBranchAdminFormWithValidator from "./CreateBranchAdminFormWithValidator";
import ErrorWarning from "../ErrorWarning";

const CreateBranchAdminForm = () => {
	const [error, setError] = React.useState("");

	return (
		<div className="mt-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-6">
			<ErrorWarning error={error} />
			<CreateBranchAdminFormWithValidator setError={setError} />
		</div>
	);
};

export default CreateBranchAdminForm;
