import React from "react";
import AdminLoginInputField from "./AdminLoginInputField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikAdminLoginConfiguration } from "./config/formikAdminLoginConfiguration";
import { useDispatch } from "react-redux";

function AdminLoginFormWithValidator({ setError }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const formik = useFormik(formikAdminLoginConfiguration(setError, navigate, dispatch));
	return (
		<form className="min-w-[70%]" onSubmit={formik.handleSubmit} noValidate>
			<AdminLoginInputField formik={formik} />
			<Button
				type="submit"
				name="Admin Login"
				disabled={formik.isSubmitting || formik.isValidating}
			/>
		</form>
	);
}

export default AdminLoginFormWithValidator;
