import React from "react";
import CreateBranchAdminInput from "./CreateBranchAdminInput";
import Button from "../Button.jsx";

const CreateBranchAdminForm = () => {
	const [input, setInput] = React.useState({});

	return (
		<div className="mt-auto items-center w-full flex flex-col pb-10 pt-4 px-6">
			<CreateBranchAdminInput setInput={setInput} />
			<Button name="Register" />
		</div>
	);
};

export default CreateBranchAdminForm;
