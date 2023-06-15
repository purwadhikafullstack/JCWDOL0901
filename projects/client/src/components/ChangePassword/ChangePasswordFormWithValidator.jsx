import React from "react";
import ChangePasswordInputField from "./ChangePasswordInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikChangePasswordConfiguration } from "./config/formikChangePasswordConfiguration";

const ChangePasswordFormWithValidator = ({ setError }) => {
	const navigate = useNavigate();
	const formik = useFormik(formikChangePasswordConfiguration(setError, navigate));

	return (
		<form onSubmit={formik.handleSubmit} noValidate>
			<ChangePasswordInputField formik={formik} />
			<Button
				type="submit"
				name="Change Password"
				disabled={formik.isSubmitting || formik.isValidating}
			/>
		</form>
	);
};

export default ChangePasswordFormWithValidator;
