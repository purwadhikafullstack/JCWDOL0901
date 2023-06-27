import React from "react";
import InputGroup from "../InputGroup";

const ResetPasswordInputField = ({ formik }) => {
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup name="Old Password" type="password" inputKey="old_password" formik={formik} />
			<InputGroup name="New Password" type="password" inputKey="password" formik={formik} />
			<InputGroup name="Confirm Password" type="password" inputKey="confirm_password" formik={formik} />
		</div>
	);
};

export default ResetPasswordInputField;
