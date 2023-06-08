import React from "react";
import AdminLoginInputField from "./AdminLoginInputField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikAdminLoginConfiguration } from "./config/formikAdminLoginConfiguration";

function AdminLoginFormWithValidator({ setError }) {
  const [busy, setBusy] = React.useState(false);
  const navigate = useNavigate();

  const formik = useFormik(formikAdminLoginConfiguration(setError, setBusy, navigate));
  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <AdminLoginInputField formik={formik} />
      <Button type="submit" name="Admin Login" disabled={formik.isSubmitting} />
    </form>
  );
}

export default AdminLoginFormWithValidator;
