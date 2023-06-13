import React from "react";
import InputLabel from "./InputGroup/InputLabel";
import InputBox from "./InputGroup/InputBox";

const InputGroup = ({ name, type, formik, inputKey }) => {
	return (
		<div className="flex flex-col my-2 w-full">
			<InputLabel name={name} />
			<InputBox inputKey={inputKey} name={name} type={type} formik={formik} />
		</div>
	);
};

export default InputGroup;
