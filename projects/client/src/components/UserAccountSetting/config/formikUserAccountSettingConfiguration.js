
import * as Yup from "yup";
import { userAccountSettingHandler } from "../handlers/UserAccountSettingHandler";

const initialValues = (user) => {
  return { name: user.name, gender: user.gender, email: user.email, birth: user.birth };
};

const validateOnChange = true;

const validateOnBlur = true;

const name = Yup.string();
const gender = Yup.string();

const email = Yup.string().email("Invalid Email Format");

const birth = Yup.string();

const validationSchema = Yup.object({
  name,
  gender,
  email,
  birth,
});

const onSubmitConfiguration = async (values, setError, navigate) => {
  await userAccountSettingHandler(values, setError, navigate);
};

export const formikUserAccountSettingConfiguration = (setError, navigate, user) => {
  
  return {
    initialValues: initialValues(user),
    onSubmit: async (values) => onSubmitConfiguration(values, setError, navigate),
    validateOnChange,
    validateOnBlur,
    validationSchema,
  };
};
