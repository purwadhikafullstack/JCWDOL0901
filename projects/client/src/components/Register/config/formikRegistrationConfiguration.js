import * as Yup from "yup";

import { registerButtonHandler } from "../handlers/registerHandler";

const initialValues = {
	email: "",
	username: "",
	phone: "",
	password: "",
	confirm_password: "",
	name: "",
	reference: "",
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const email = Yup.string()
	.email("Invalid Email Format")
	.required(requiredMessage);

const username = Yup.string()
	.min(6, "Minimum 6 characters for username")
	.required(requiredMessage);

const password = Yup.string()
	.min(8, "Password must be at least 8 character long")
	.required(requiredMessage);

const confirm_password = Yup.string()
	.test("Match password", "Password must match", (input, formik) =>  {
		return input === formik.parent.password
	})

const name = Yup.string().required(requiredMessage);

const phone = Yup.string().matches(/^[0-9]*$/, "Can not contain alphabetic").required(requiredMessage);

const validationSchema = Yup.object({
	email,
	username,
	phone,
	password,
	confirm_password,
	name,
});

const onSubmitConfiguration = async (values, setError, setBusy, navigate) => {
	await registerButtonHandler(values, setError, setBusy, navigate);
};

export const formikRegistrationConfiguration = (setError, setBusy, navigate) => {
	return	{
			initialValues,
			onSubmit: async values =>
				onSubmitConfiguration(values, setError, setBusy, navigate),
			validateOnChange,
			validateOnBlur,
			validationSchema,
	};

}
	