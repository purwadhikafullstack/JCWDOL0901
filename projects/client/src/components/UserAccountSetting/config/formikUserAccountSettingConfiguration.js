import * as Yup from "yup";
import { userAccountSettingHandler } from "../handlers/UserAccountSettingHandler";

const initialValues = {
  name: "",
  gender: "",
  email: "",
  birthdate: "",
};

const validateOnChange = true;

const validateOnBlur = true;

const name = Yup.string();
const gender = Yup.string();

const email = Yup.string().email("Invalid Email Format");

const birthdate = Yup.string();

const validationSchema = Yup.object({
  name,
  gender,
  email,
  birthdate,
});

const onSubmitConfiguration = async (values, setError, navigate) => {
  await userAccountSettingHandler(values, setError, navigate);
};

export const formikUserAccountSettingConfiguration = (setError, navigate) => {
  return {
    initialValues,
    onSubmit: async (values) => onSubmitConfiguration(values, setError, navigate),
    validateOnChange,
    validateOnBlur,
    validationSchema,
  };
};
