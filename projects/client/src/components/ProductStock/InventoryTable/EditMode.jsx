import { useFormik } from "formik";
import React from "react";
import { formikEditModeConfiguration } from "../config/formikEditModeConfiguration";
import ErrorWarning from "../../ErrorWarning";

const FormikError = ({ formik, inputKey }) => {
	return (
		formik?.errors?.[inputKey] &&
		formik?.touched?.[inputKey] && (
			<div className="text-red absolute text-xs font-light select-none text-left">
				{formik?.errors?.[inputKey]}
			</div>
		)
	);
};

const EditModeButton = ({ setEditMode, formik }) => {
	return (
		<td className="py-4 bg-white text-xs text-white text-center">
			<button
				className="bg-green-500 px-3 py-1.5 rounded"
				type="button"
				onClick={formik.handleSubmit}
			>
				Save
			</button>
			<button className="bg-red px-3 py-1.5 rounded ml-2" onClick={() => setEditMode(-1)}>
				Cancel
			</button>
		</td>
	);
};

const EditForm = ({ formik }) => {
	return (
		<div className="flex flex-col items-center h-full">
			<span className="mb-1">New Stock:</span>
			<div className="mb-6">
				<input
					className="text-center bg-gray-100 rounded p-1"
					name="stock"
					type="number"
					onChange={formik?.handleChange}
					onBlur={formik?.handleBlur}
					defaultValue={formik?.initialValues?.stock}
					value={formik?.value?.stock}
				/>
				<FormikError formik={formik} inputKey="stock" />
			</div>
			<span className="mb-1">Description:</span>
			<div>
				<input
					className="text-center bg-gray-100 rounded p-1"
					name="description"
					type="text"
					placeholder="Restock, Loss, etc..."
					onChange={formik?.handleChange}
					onBlur={formik?.handleBlur}
					value={formik?.value?.description}
				/>
				<FormikError formik={formik} inputKey="description" />
			</div>
		</div>
	);
};

const EditMode = ({ item, index, setEditMode }) => {
	const [error, setError] = React.useState("");
	const formik = useFormik(formikEditModeConfiguration(setError, item, setEditMode));

	const tdClassName = "py-4 bg-white text-xs text-center";

	return (
		<tbody key={index}>
			<tr>
				<td className={tdClassName}>
					<img src={item.Product.image} className="w-[80px] mx-auto" />
				</td>
				<td className={tdClassName}>{item.Product.name}</td>
				<td className={tdClassName}>
					<ErrorWarning error={error} />
					<EditForm formik={formik} />
				</td>
				<EditModeButton setEditMode={setEditMode} formik={formik} />
			</tr>
		</tbody>
	);
};

export default EditMode;
