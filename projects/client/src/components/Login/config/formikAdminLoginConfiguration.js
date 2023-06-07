import * as Yup from "yup";

import { adminLoginButtonHandler } from "../handlers/adminLoginHandler";

const initialValues = {
  email: "",
  password: "",
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

const validationSchema = Yup.object({
  email,
  password,
});

const onSubmitConfiguration = async (values, setError, setBusy, navigate) => {
  await adminLoginButtonHandler(values, setError, setBusy, navigate);
};

export const formikAdminLoginConfiguration = (setError, setBusy, navigate) => {
  return {
    initialValues,
    onSubmit: async (values) =>
      onSubmitConfiguration(values, setError, setBusy, navigate),
    validateOnChange,
    validateOnBlur,
    validationSchema,
  };
};
