import * as Yup from "yup";

import { editStockButtonHandler } from "../handlers/ProductStockHandler.js";

const initialValues = item => {
	return { inventory_id: item.id, stock: item.stock, description: "" };
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const stock = Yup.number()
	.typeError("Must be a number")

	.test("Must be greater than or equal to 0", "Can't be negative", input => {
		return input >= 0;
	})
	.required(requiredMessage);

const description = Yup.string().required(requiredMessage);

const validationSchema = Yup.object({
	stock,
	description,
});

const onSubmitConfiguration = async (values, setError, setEditMode) => {
	await editStockButtonHandler(values, setError);
};

export const formikEditModeConfiguration = (setError, item, setEditMode) => {
	return {
		initialValues: initialValues(item),
		onSubmit: async values => onSubmitConfiguration(values, setError, setEditMode),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
