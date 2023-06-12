import React from "react";
import InputGroup from "../InputGroup";

const CategoryInputField = ({ formik }) => {
	return (
		<div className="flex flex-col items-center w-96">
			<InputGroup name="Category Name" type="text" inputKey="name" formik={formik} />
			<InputGroup name="Upload Image" type="text" inputKey="image" formik={formik} />
		</div>
	);
};

export default CategoryInputField;
