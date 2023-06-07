import React from "react";
import { formikAdminLoginConfiguration } from "./config/formikAdminLoginConfiguration";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

function AdminLoginFormWithValidator({ setError }) {
  const [busy, setBusy] = React.useState(false);
  const navigate = useNavigate();

  const formik = useFormik(
    formikAdminLoginConfiguration(setError, setBusy, navigate)
  );
  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <RegisterInputField formik={formik} />
      <Button type="submit" name="Register" disabled={busy} />
    </form>
  );
}

export default AdminLoginFormWithValidator;
