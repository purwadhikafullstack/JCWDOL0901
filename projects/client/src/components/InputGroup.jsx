import React from "react";
import InputLabel from "./InputGroup/InputLabel";
import InputBox from "./InputGroup/InputBox";

const InputGroup = ({ formName, formType, required }) => {
	return (
		<div className="flex flex-col my-2 w-full">
			<InputLabel formName={formName} required={required} />
			<InputBox formName={formName} formType={formType} required={required} />
		</div>
	);
};

export default InputGroup;
