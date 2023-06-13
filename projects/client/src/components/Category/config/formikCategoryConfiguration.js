import * as Yup from "yup";

import { createCategoryHandler } from "../handlers/categoryHandler";

const initialValues = {
	name: "",
	image: "",
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const name = Yup.string().required(requiredMessage);

const image = Yup.string().required(requiredMessage);

const validationSchema = Yup.object({
	name,
	image,
});

const onSubmitConfiguration = async values => {
	await createCategoryHandler(values);
};

export const formikCategoryConfiguration = navigate => {
	return {
		initialValues,
		onSubmit: async values => onSubmitConfiguration(values, navigate),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
