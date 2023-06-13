import * as Yup from "yup";

import { userLoginButtonHandler } from "../handlers/userLoginHandler";

const initialValues = {
  user: "",
  password: "",
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const user = Yup.string().required(requiredMessage);

const password = Yup.string()
  .min(8, "Password must be at least 8 character long")
  .required(requiredMessage);

const validationSchema = Yup.object({ user, password });

const onSubmitConfiguration = async (values, setError, navigate) => {
  await userLoginButtonHandler(values, setError, navigate);
};

export const formikUserLoginConfiguration = (setError, navigate) => {
  return {
    initialValues,
    onSubmit: async (values) => onSubmitConfiguration(values, setError, navigate),
    validateOnChange,
    validateOnBlur,
    validationSchema,
  };
};
