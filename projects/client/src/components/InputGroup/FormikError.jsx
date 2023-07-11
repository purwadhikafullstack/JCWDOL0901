import React from "react";

const FormikError = ({ formik, inputKey }) => {
	return (
		formik?.errors?.[inputKey] &&
		formik?.touched?.[inputKey] && (
			<div className="text-red absolute text-xs font-light top-11 left-1 select-none text-left">
				{formik?.errors?.[inputKey]}
			</div>
		)
	);
};

export default FormikError;
