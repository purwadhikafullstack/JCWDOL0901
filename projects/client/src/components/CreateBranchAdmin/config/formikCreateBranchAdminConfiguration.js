import * as Yup from "yup";

import { createBranchAdminHandler } from "../handlers/createBranchAdminHandler";

const initialValues = {
	email: "",
	password: "",
	confirm_password: "",
	name: "",
	city_id: 0,
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const email = Yup.string()
	.email("Invalid Email Format")
	.required(requiredMessage);

const password = Yup.string()
	.min(8, "Password must be at least 8 character long")
	.required(requiredMessage);

const confirm_password = Yup.string().test(
	"Match password",
	"Password must match",
	(input, formik) => {
		return input === formik.parent.password;
	}
);

const name = Yup.string().required(requiredMessage);

const city_id = Yup.string().test(
	"Must select",
	"Required",
	input => input > 0
);

const validationSchema = Yup.object({
	email,
	password,
	confirm_password,
	name,
	city_id,
});

const onSubmitConfiguration = async values => {
	await createBranchAdminHandler(values);
};

export const formikCreateBranchAdminConfiguration = navigate => {
	return {
		initialValues,
		onSubmit: async values => onSubmitConfiguration(values, navigate),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
