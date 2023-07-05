import * as Yup from "yup";

import { createProductHandler } from "../handlers/manageProductsHandler";

const initialValues = {
	name: "",
	image: "",
	price: 0,
	description: "",
	weight: 0,
	unit: "",
	category_id: "",
	active: 1,
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const name = Yup.string().required(requiredMessage);
const price = Yup.string().required(requiredMessage);
const description = Yup.string().required(requiredMessage);
const weight = Yup.string().required(requiredMessage);
const unit = Yup.string().required(requiredMessage);
const category_id = Yup.string().required(requiredMessage);
const active = Yup.string().required(requiredMessage);
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
	price,
	description,
	weight,
	unit,
	category_id,
	active,
});

const onSubmitConfiguration = async (values, navigate) => {
	await createProductHandler(values, navigate);
};

export const formikProductConfiguration = (navigate) => {
	return {
		initialValues,
		onSubmit: async (values) => onSubmitConfiguration(values, navigate),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
