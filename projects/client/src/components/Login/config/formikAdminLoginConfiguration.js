import * as Yup from "yup";

import { adminLoginButtonHandler } from "../handlers/adminLoginHandler";

const initialValues = {
	email: "",
	password: "",
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const email = Yup.string().email("Invalid Email Format").required(requiredMessage);

const validationSchema = Yup.object({
	email,
});

const onSubmitConfiguration = async (values, setError, navigate) => {
	await adminLoginButtonHandler(values, setError, navigate);
};

export const formikAdminLoginConfiguration = (setError, navigate) => {
	return {
		initialValues,
		onSubmit: async values => onSubmitConfiguration(values, setError, navigate),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
