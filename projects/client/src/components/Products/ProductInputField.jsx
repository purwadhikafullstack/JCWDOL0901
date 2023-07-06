import React from "react";
import InputGroup from "../InputGroup";
import FileUploadInputGroup from "../FileUploadInputGroup";
import SelectGroupCategory from "./SelectGroupCategory";
import SelectGroupProductIsActive from "./SelectGroupProductIsActive";

const ProductInputField = ({ formik, setFile }) => {
	return (
		<div className="flex flex-col items-center w-full">
			<InputGroup name="Product's Name" type="text" inputKey="name" formik={formik} />
			<InputGroup name="Product's Price" type="number" inputKey="price" formik={formik} />
			<InputGroup name="Product's Description" type="text" inputKey="description" formik={formik} />
			<InputGroup name="Product's Weight (in gram)" type="number" inputKey="weight" formik={formik} />
			<InputGroup name="Product's Unit" type="text" inputKey="unit" formik={formik} />
			<SelectGroupCategory name="Product's Category" inputKey="category_id" formik={formik} />
			<SelectGroupProductIsActive name="Product's Active Status" inputKey="active" formik={formik} />
			<FileUploadInputGroup name="Upload Image" type="file" inputKey="image" formik={formik} setFile={setFile} />
		</div>
	);
};

export default ProductInputField;
