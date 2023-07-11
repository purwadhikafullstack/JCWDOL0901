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

const onSubmitConfiguration = async (values, setError, navigate, dispatch) => {
	await adminLoginButtonHandler(values, setError, navigate, dispatch);
};

export const formikAdminLoginConfiguration = (setError, navigate, dispatch) => {
	return {
		initialValues,
		onSubmit: async values => onSubmitConfiguration(values, setError, navigate, dispatch),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
