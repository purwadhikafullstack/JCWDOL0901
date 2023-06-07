import React from "react";
import RegisterInputField from "./RegisterInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikRegistrationConfiguration } from "./config/formikRegistrationConfiguration";

const RegisterFormWithValidator = ({ setError }) => {
  const [busy, setBusy] = React.useState(false);
  const navigate = useNavigate();

  const formik = useFormik(
    formikRegistrationConfiguration(setError, setBusy, navigate)
  );

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <RegisterInputField formik={formik} />
      <Button type="submit" name="Register" disabled={busy} />
    </form>
  );
};

export default RegisterFormWithValidator;
