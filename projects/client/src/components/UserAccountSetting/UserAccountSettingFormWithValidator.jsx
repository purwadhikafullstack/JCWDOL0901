import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formikUserAccountSettingConfiguration } from "./config/formikUserAccountSettingConfiguration";
import UserAccountSettingInputField from "./UserAccountSettingInputField";
import Button from "../Button";

function UserAccountSettingFormWithValidator({ setError, user }) {
	const navigate = useNavigate();

	const formik = useFormik(formikUserAccountSettingConfiguration(setError, navigate, user));

	if (formik) {
		return (
			<form onSubmit={formik.handleSubmit} noValidate>
				<UserAccountSettingInputField formik={formik} />
				<Button type="submit" name="Save" disabled={formik.isSubmitting || formik.isValidating} />
			</form>
		);
	}
}

export default UserAccountSettingFormWithValidator;
