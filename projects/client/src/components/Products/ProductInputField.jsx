import React from "react";
import InputGroup from "../InputGroup";
import FileUploadInputGroup from "../FileUploadInputGroup";

const ProductInputField = ({ formik, setFile }) => {
	return (
		<div className="flex flex-col items-center w-full">
			<InputGroup name="Product Name" type="text" inputKey="name" formik={formik} />
			<FileUploadInputGroup name="Upload Image" type="file" inputKey="image" formik={formik} setFile={setFile} />
		</div>
	);
};

export default ProductInputField;
