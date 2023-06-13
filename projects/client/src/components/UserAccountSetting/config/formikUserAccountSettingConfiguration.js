import * as Yup from "yup";

import { userAccountSettingHandler } from "./handlers/UserAccountSettingHandler";

const initialValues = {
  name: "",
  gender: "",
  email: "",
  birthdate: "",
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const name = Yup.string().required(requiredMessage);

const gender = Yup.string().required(requiredMessage);

const email = Yup.string().email("Invalid Email Format").required(requiredMessage);

const birthdate = Yup.string().required(requiredMessage);

const validationSchema = Yup.object({
  name,
  gender,
  email,
  birthdate,
});


const onSubmitConfiguration = async (values, setError, navigate) => {
	await userAccountSettingHandler(values, setError, navigate);
};

export const formikUserAccountSettingConfiguration = (setError, setBusy, navigate) => {
    return {
      initialValues,
      onSubmit: async (values) => onSubmitConfiguration(values, setError, setBusy, navigate),
      validateOnChange,
      validateOnBlur,
      validationSchema,
    };
  };
  