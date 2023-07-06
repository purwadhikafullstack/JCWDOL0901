import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import ProductImagePreview from "./ProductImagePreview";
import ProductInputField from "./ProductInputField";
import { formikProductConfiguration } from "./config/formikProductConfiguration";

const CreateProductForm = () => {
	const navigate = useNavigate();
	const [file, setFile] = useState();
	const formik = useFormik(formikProductConfiguration(navigate));
	return (
		<div className="my-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-8">
			<form onSubmit={formik.handleSubmit} encType="multipart/form-data">
				<ProductImagePreview file={file} />
				<ProductInputField formik={formik} setFile={setFile} />
				<Button type="submit" name="Create" disabled={formik.isSubmitting} />
			</form>
		</div>
	);
};

export default CreateProductForm;
