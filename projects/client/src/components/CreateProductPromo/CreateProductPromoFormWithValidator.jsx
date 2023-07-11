import React from "react";
import CreateProductPromoInputField from "./CreateProductPromoInputField.jsx";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikConfiguration } from "./config/formikCreatePromoConfiguration.js";

const CreateProductPromoFormWithValidator = ({ setError }) => {
	const navigate = useNavigate();
	const formik = useFormik(formikConfiguration(setError, navigate));

	return (
		<form onSubmit={formik.handleSubmit} noValidate>
			<CreateProductPromoInputField formik={formik} />
			<Button
				type="submit"
				name="Create"
				disabled={formik.isSubmitting || formik.isValidating}
				pending={formik.isSubmitting}
			/>
		</form>
	);
};

export default CreateProductPromoFormWithValidator;
