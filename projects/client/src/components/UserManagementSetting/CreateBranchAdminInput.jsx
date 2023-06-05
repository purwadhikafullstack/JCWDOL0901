import React from "react";
import InputGroup from "../InputGroup";
import SelectMenus from "../SelectMenus";

const CreateBranchAdminInput = ({ setInput }) => {
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup
				formName="Email"
				formType="email"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				formName="Password"
				formType="password"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				formName="Confirm Password"
				formType="password"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				formName="Store Name"
				formType="text"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				formName="City"
				formType="text"
				setInput={setInput}
				required={true}
			/>
			<SelectMenus />
		</div>
	);
};

export default CreateBranchAdminInput;
