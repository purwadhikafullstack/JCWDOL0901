import React, { useState } from "react";
import UserLoginInputField from "./UserLoginInputField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikUserLoginConfiguration } from "./config/formikUserLoginConfiguration";
import { useDispatch } from "react-redux";

function UserLoginFormWithValidator({ setError }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const formik = useFormik(formikUserLoginConfiguration(setError, navigate, dispatch));

	return (
		<form onSubmit={formik.handleSubmit} noValidate>
			<UserLoginInputField formik={formik} />
			<Button
				type="submit"
				name="Login"
				disabled={formik.isSubmitting || formik.isValidating}
				pending={formik.isSubmitting}
			/>
		</form>
	);
}

export default UserLoginFormWithValidator;
