import React from "react";
import InputGroup from "../InputGroup";
import FileUploadInputGroup from "../FileUploadInputGroup";

const CategoryInputField = ({ formik, setFile }) => {
	return (
		<div className="flex flex-col items-center w-96">
			<InputGroup name="Category Name" type="text" inputKey="name" formik={formik} />
			<FileUploadInputGroup
				name="Upload Image"
				type="file"
				inputKey="image"
				formik={formik}
				setFile={setFile}
			/>
		</div>
	);
};

export default CategoryInputField;
