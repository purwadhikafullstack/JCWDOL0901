import * as Yup from "yup";

import { updateProductHandler } from "../handlers/manageProductsHandler";

const initialValues = (item) => {
	return {
		name: item.name,
	};
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const name = Yup.string().required(requiredMessage);
const image = Yup.mixed()
	.nullable()
	.test("fileSize", "The file is too large", (value) => {
		return !value || (value && value.size <= 1024 * 1024);
	})
	.test("type", "Only accept .jpeg, .jpg, .png, .gif formats", (value) => {
		return (
			!value ||
			(value && (value.type === "image/jpeg" || value.type === "image/gif" || value.type === "image/png"))
		);
	});

const validationSchema = Yup.object({
	name,
	image,
});

const onSubmitConfiguration = async (values, item, navigate) => {
	await updateProductHandler(values, item, navigate);
};

export const formikUpdateProductConfiguration = (navigate, item) => {
	return {
		initialValues: initialValues(item),
		onSubmit: async (values) => onSubmitConfiguration(values, item, navigate),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
