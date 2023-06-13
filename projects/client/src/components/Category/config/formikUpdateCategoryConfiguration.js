import * as Yup from "yup";

import { updateCategoryHandler } from "../handlers/categoryHandler";

const initialValues = item => {
	return {
		name: item.name,
	};
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const name = Yup.string().required(requiredMessage);

const validationSchema = Yup.object({
	name,
});

const onSubmitConfiguration = async (values, item) => {
	await updateCategoryHandler(values, item);
};

export const formikUpdateCategoryConfiguration = (navigate, item) => {
	return {
		initialValues: initialValues(item),
		onSubmit: async values => onSubmitConfiguration(values, item),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
