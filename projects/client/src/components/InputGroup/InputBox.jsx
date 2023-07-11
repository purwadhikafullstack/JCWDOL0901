import React from "react";

import FormikError from "./FormikError";

const InputBox = ({ name, type, inputKey, formik }) => {
	return (
		<div className="relative z-10">
			<input
				type={type}
				name={inputKey}
				id={name}
				placeholder={name}
				onChange={formik?.handleChange}
				onBlur={formik?.handleBlur}
				value={formik?.values[inputKey]}
				className="bg-gray-100 text-gray-500 placeholder-gray-200 border-2 border-white active:bg-white focus:border-green-500 focus:outline-none focus:border-2 focus:bg-white focus:text-black rounded-lg text-sm w-full p-2.5"
			/>
			<FormikError formik={formik} inputKey={inputKey} />
		</div>
	);
};

export default InputBox;
