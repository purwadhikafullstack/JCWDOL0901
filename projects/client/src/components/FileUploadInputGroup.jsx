import React from "react";
import InputLabel from "./InputGroup/InputLabel";
import InputFileUpload from "./InputGroup/InputFileUpload";

const FileUploadInputGroup = ({ name, type, formik, inputKey }) => {
	return (
		<div className="flex flex-col my-2 w-full">
			<InputLabel name={name} />
			<InputFileUpload inputKey={inputKey} name={name} type={type} formik={formik} />
		</div>
	);
};

export default FileUploadInputGroup;
