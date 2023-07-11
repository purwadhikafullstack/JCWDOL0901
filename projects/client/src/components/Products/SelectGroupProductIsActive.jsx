import React from "react";
import InputLabel from "../InputGroup/InputLabel";
import SelectBoxProductIsActive from "./SelectBoxProductIsActive";

const SelectGroupProductIsActive = ({ name, formik, inputKey }) => {
	return (
		<div className="flex flex-col my-2 w-full">
			<InputLabel name={name} />
			<SelectBoxProductIsActive inputKey={inputKey} name={name} formik={formik} />
		</div>
	);
};

export default SelectGroupProductIsActive;
