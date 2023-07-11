import React from "react";
import InputLabel from "../InputGroup/InputLabel";
import SelectBoxCategory from "./SelectBoxCategory";

const SelectGroupCategory = ({ name, formik, inputKey }) => {
	return (
		<div className="flex flex-col my-2 w-full">
			<InputLabel name={name} />
			<SelectBoxCategory inputKey={inputKey} name={name} formik={formik} />
		</div>
	);
};

export default SelectGroupCategory;
