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

const image = Yup.mixed()
	.required(requiredMessage)
	.test("fileSize", "The file is too large", (value) => {
		return value && value.size <= 1024 * 1024;
	})
	.test("type", "Only accept .jpeg, .jpg, .png, .gif formats", (value) => {
		return value && (value.type === "image/jpeg" || value.type === "image/gif" || value.type === "image/png");
	});

const validationSchema = Yup.object({
	name,
	image,
});

const onSubmitConfiguration = async (values, navigate) => {
	await createCategoryHandler(values, navigate);
};

export const formikCategoryConfiguration = (navigate) => {
	return {
		initialValues,
		onSubmit: async (values) => onSubmitConfiguration(values, navigate),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
