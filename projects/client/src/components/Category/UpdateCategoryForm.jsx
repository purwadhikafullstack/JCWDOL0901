import React from "react";
import CategoryInputField from "./CategoryInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikUpdateCategoryConfiguration } from "./config/formikUpdateCategoryConfiguration";
import { useState } from "react";
import CategoryImagePreview from "./CategoryImagePreview";

const UpdateCategoryForm = ({ item }) => {
	const navigate = useNavigate();
	const [file, setFile] = useState(item.image);
	const formik = useFormik(formikUpdateCategoryConfiguration(navigate, item));

	return (
		<div className="my-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-8">
			<form onSubmit={formik.handleSubmit} encType="multipart/form-data">
				<CategoryImagePreview file={file} />
				<CategoryInputField formik={formik} setFile={setFile} />
				<Button type="submit" name="Update" disabled={formik.isSubmitting} />
			</form>
		</div>
	);
};

export default UpdateCategoryForm;
