import * as Yup from "yup";

import { resetPasswordButtonHandler } from "../handlers/resetPasswordButtonHandler";

const initialValues = {
	password: "",
	confirm_password: "",
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const password = Yup.string().min(8, "Password must be at least 8 character long").required(requiredMessage);

const confirm_password = Yup.string().test("Match password", "Password must match", (input, formik) => {
	return input === formik.parent.password;
});

const validationSchema = Yup.object({
	password,
	confirm_password,
});

const onSubmitConfiguration = async (values, setError, navigate) => {
	await resetPasswordButtonHandler(values, setError, navigate);
};

export const formikResetPasswordConfiguration = (setError, navigate) => {
	return {
		initialValues,
		onSubmit: async (values) => onSubmitConfiguration(values, setError, navigate),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
