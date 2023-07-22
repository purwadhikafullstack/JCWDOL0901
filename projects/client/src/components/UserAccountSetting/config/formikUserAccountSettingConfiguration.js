import * as Yup from "yup";
import { userAccountSettingHandler } from "../handlers/UserAccountSettingHandler";

const initialValues = (user) => {
	return { name: user.name, gender: user.gender, email: user.email, birth: user.birth };
};

const validateOnChange = true;

const validateOnBlur = true;

const name = Yup.string();
const gender = Yup.string().nullable();

const email = Yup.string().email("Invalid Email Format");

const birth = Yup.string().nullable();

const validationSchema = Yup.object({
	name,
	gender,
	email,
	birth,
});

const onSubmitConfiguration = async (values, setError, user) => {
	await userAccountSettingHandler(values, setError, user);
};

export const formikUserAccountSettingConfiguration = (setError, navigate, user) => {
	return {
		initialValues: initialValues(user),
		onSubmit: async (values) => onSubmitConfiguration(values, setError, user),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
