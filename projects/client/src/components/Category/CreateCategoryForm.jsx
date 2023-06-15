import React from "react";
import CategoryInputField from "./CategoryInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikCategoryConfiguration } from "./config/formikCategoryConfiguration";
import { useState } from "react";
import CategoryImagePreview from "./CategoryImagePreview";

const CreateCategoryForm = () => {
	const navigate = useNavigate();
	const [file, setFile] = useState();
	const formik = useFormik(formikCategoryConfiguration(navigate));

	return (
		<div className="my-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-8">
			<form onSubmit={formik.handleSubmit} encType="multipart/form-data">
				<CategoryImagePreview file={file} />
				<CategoryInputField formik={formik} setFile={setFile} />
				<Button type="submit" name="Create" disabled={formik.isSubmitting} />
			</form>
		</div>
	);
};

export default CreateCategoryForm;
