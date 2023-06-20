import * as Yup from "yup";

import { updateAvatarHandler } from "../handlers/updateAvatarHandler";

const initialValues = (file) => {
	console.log("file in initialValues formik: ", file);
	return {
		name: "",
		image: "",
	};
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const name = Yup.string().required(requiredMessage);

const validationSchema = Yup.object({
	name,
});

const onSubmitConfiguration = async (values, setError) => {
	console.log("values in onSubmitConfiguration: ", values, "setError in onSubmitConfiguration: ", setError);
	await updateAvatarHandler(values);
};

export const formikUpdateAvatarConfiguration = (file, setError) => {
	return {
		initialValues: initialValues(file),
		onSubmit: async (values) => onSubmitConfiguration(values, setError),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
