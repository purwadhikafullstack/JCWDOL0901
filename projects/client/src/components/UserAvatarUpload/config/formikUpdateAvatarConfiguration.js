import * as Yup from "yup";

import { updateAvatarHandler } from "../handlers/updateAvatarHandler";

const FILE_SIZE = 1000000;
const SUPPORTED_FORMATS = ["image/jpeg", "image/png", "image/jpg", "image/gif"];

const initialValues = {};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const validationSchema = Yup.object({
	avatar: Yup.mixed()
		.required(requiredMessage)
		.test("FILE_SIZE", "Uploaded file is too big.", (value) => !value || (value && value.size <= FILE_SIZE))
		.test(
			"FILE_FORMAT",
			"Uploaded file has unsupported format.",
			(value) => !value || (value && SUPPORTED_FORMATS.includes(value.type)),
		),
});
// const validationSchema = Yup.object({
// 	avatar: Yup.mixed().required(requiredMessage),
// 	// .nullable()
// 	// .test("FILE_SIZE", "Uploaded file is too big.", (value) => !value || (value && value.size <= FILE_SIZE))
// 	// .test(
// 	// 	"FILE_FORMAT",
// 	// 	"Uploaded file has unsupported format.",
// 	// 	(value) => !value || (value && SUPPORTED_FORMATS.includes(value.type)),
// 	// ),
// });

const onSubmitConfiguration = async (values) => {
	console.log("data FE formikConfig: ", values);
	await updateAvatarHandler(values);
};

export const formikUpdateAvatarConfiguration = () => {
	return {
		initialValues,
		onSubmit: async (values) => onSubmitConfiguration(values),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
