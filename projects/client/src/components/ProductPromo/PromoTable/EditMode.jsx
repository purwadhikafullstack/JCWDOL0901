import React from "react";
import { getPromotionsType } from "../handlers/productPromoHandler";
import { useFormik } from "formik";
import { formikEditModeConfiguration } from "../config/formikEditModeHandler";
import ErrorWarning from "../../ErrorWarning.jsx";

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

const PromotionEdit = ({ formik }) => {
	const [types, setTypes] = React.useState([]);

	React.useEffect(() => {
		getPromotionsType()
			.then((result) => setTypes(result.data))
			.catch((error) => alert(error));
	}, []);

	return (
		types && (
			<select
				name="promotion_id"
				className="bg-gray-100 rounded p-1"
				onChange={formik?.handleChange}
				onBlur={formik?.handleBlur}
				value={formik?.values?.promotion_id}
			>
				{types.map((type, index) => {
					return (
						<option value={type.id} key={index}>
							{type.name}
						</option>
					);
				})}
			</select>
		)
	);
};

const EditModeButton = ({ setEditMode, formik }) => {
	return (
		<>
			<button type="button" className="bg-green-500 px-3 py-1.5 rounded" onClick={formik.handleSubmit}>
				Save
			</button>
			<button className="bg-red px-3 py-1.5 rounded ml-2" onClick={() => setEditMode(-1)}>
				Cancel
			</button>
		</>
	);
};

const EditMode = ({ item, index, setEditMode }) => {
	const [error, setError] = React.useState("");
	const formik = useFormik(formikEditModeConfiguration(setError, item));
	const tdClassName = "py-4 bg-white text-xs text-center";

	return (
		<tbody key={index}>
			<tr>
				<td className={tdClassName}>
					<img
						src={process.env.REACT_APP_IMAGE_BASE_URL + item.Inventory.Product.image}
						className="w-[80px] mx-auto"
					/>
				</td>
				<td className={tdClassName}>{item.Inventory.Product.name}</td>
				<td className={tdClassName}>
					<PromotionEdit formik={formik} />
				</td>
				<td className={tdClassName}>
					<input
						className="text-center bg-gray-100 rounded p-1"
						name="value"
						type="number"
						onChange={formik?.handleChange}
						onBlur={formik?.handleBlur}
						value={formik?.values?.value}
					/>
					<FormikError formik={formik} inputKey="value" />
				</td>
				<td className={tdClassName}>
					<input
						type="date"
						name="start_at"
						onChange={formik?.handleChange}
						onBlur={formik?.handleBlur}
						value={formik?.values?.start_at}
					/>
					<FormikError formik={formik} inputKey="start_at" />
				</td>
				<td className={tdClassName}>
					<input
						type="date"
						name="expired_at"
						onChange={formik?.handleChange}
						onBlur={formik?.handleBlur}
						value={formik?.values?.expired_at}
					/>
					<FormikError formik={formik} inputKey="expired_at" />
				</td>
				<td className="py-4 bg-white text-xs text-white text-center">
					<ErrorWarning error={error} />
					<EditModeButton setEditMode={setEditMode} formik={formik} />
				</td>
			</tr>
		</tbody>
	);
};

export default EditMode;
