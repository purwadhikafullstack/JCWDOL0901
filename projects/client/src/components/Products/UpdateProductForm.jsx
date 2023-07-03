import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import ProductImagePreview from "./ProductImagePreview";
import ProductInputField from "./ProductInputField";
import { formikUpdateProductConfiguration } from "./config/formikUpdateProductConfiguration";

const UpdateProductForm = ({item}) => {
    const navigate = useNavigate();
	const [file, setFile] = useState(item.image);
	const formik = useFormik(formikUpdateProductConfiguration(navigate, item));

	return (
        <div className="my-auto items-center min-w-fit shrink-0 flex flex-col pb-10 px-8">
			<form onSubmit={formik.handleSubmit} encType="multipart/form-data">
				<ProductImagePreview file={file} />
				<ProductInputField formik={formik} setFile={setFile} />
				<Button type="submit" name="Update" disabled={formik.isSubmitting} />
			</form>
		</div>
    )
};

export default UpdateProductForm;
