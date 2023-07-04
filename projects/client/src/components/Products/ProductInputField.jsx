import React from "react";
import InputGroup from "../InputGroup";
import FileUploadInputGroup from "../FileUploadInputGroup";

const ProductInputField = ({ formik, setFile }) => {
	return (
		<div className="flex flex-col items-center w-full">
			<InputGroup name="Product's Name" type="text" inputKey="name" formik={formik} />
			<InputGroup name="Product's Price" type="number" inputKey="price" formik={formik} />
			<InputGroup name="Product's Description" type="text" inputKey="description" formik={formik} />
			<InputGroup name="Product's Weight" type="number" inputKey="weight" formik={formik} />
			<InputGroup name="Product's Unit" type="text" inputKey="unit" formik={formik} />
			<InputGroup name="Product's Category" type="text" inputKey="name" formik={formik} />
			<InputGroup name="Product's Active Status" type="text" inputKey="name" formik={formik} />
			<FileUploadInputGroup name="Upload Image" type="file" inputKey="image" formik={formik} setFile={setFile} />
		</div>
	);
};

export default ProductInputField;
