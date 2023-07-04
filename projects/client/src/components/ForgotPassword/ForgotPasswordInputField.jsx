import React from "react";
import InputGroup from "../InputGroup";

const ForgotPasswordInputField = ({ formik }) => {
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup name="Email" type="text" inputKey="email" formik={formik} />
		</div>
	);
};

export default ForgotPasswordInputField;
