import React from "react";
import InputLabel from "./InputGroup/InputLabel";
import SelectBox from "./InputGroup/SelectBox";

const SelectGroup = ({ name, formik, inputKey, getter }) => {
	return (
		<div className="flex flex-col my-2 w-full">
			<InputLabel name={name} />
			<SelectBox inputKey={inputKey} getter={getter} name={name} formik={formik} />
		</div>
	);
};

export default SelectGroup;
