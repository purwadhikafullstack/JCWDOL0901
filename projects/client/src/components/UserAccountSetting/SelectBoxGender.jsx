import React from "react";
import FormikError from "../InputGroup/FormikError";

const Options = () => {
	const options = [
		{ id: "M", name: "Male" },
		{ id: "F", name: "Female" },
	];

	return (
		<>
			<option value={""}>Select gender</option>
			{options.map((option, index) => {
				return (
					<option value={option.id} key={index}>
						{option.name}
					</option>
				);
			})}
		</>
	);
};

function SelectBoxGender({ name, inputKey, formik }) {
	return (
		<div className="relative z-10">
			<select
				name={inputKey}
				id={name}
				onChange={formik?.handleChange}
				onBlur={formik?.handleBlur}
				value={formik?.values[inputKey]}
				className="bg-gray-100 text-gray-500 placeholder-gray-200 border-2 border-white active:bg-white focus:border-green-500 focus:outline-none focus:border-2 focus:bg-white focus:text-black rounded-lg text-sm w-full p-2.5"
			>
				<Options />
			</select>
			<FormikError formik={formik} inputKey={inputKey} />
		</div>
	);
}

export default SelectBoxGender;
