import React from "react";
import CategoryInputField from "./CategoryInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikCategoryConfiguration } from "./config/formikCategoryConfiguration";

const CreateBranchAdminFormWithValidator = () => {
	const navigate = useNavigate();

	const formik = useFormik(formikCategoryConfiguration(navigate));

	return (
		<div className="my-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-6">
			<form onSubmit={formik.handleSubmit} noValidate>
				<CategoryInputField formik={formik} />
				<Button type="submit" name="Create" disabled={formik.isSubmitting} />
			</form>
		</div>
	);
};

export default CreateBranchAdminFormWithValidator;
