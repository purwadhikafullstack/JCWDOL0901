import React from "react";
import UserLoginInputField from "./UserLoginInputField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikUserLoginConfiguration } from "./config/formikUserLoginConfiguration";

function UserLoginFormWithValidator() {
  const navigate = useNavigate();

  const formik = useFormik(formikUserLoginConfiguration(setError, navigate));

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <UserLoginInputField formik={formik} />
      <Button
        type="submit"
        name="User Login"
        disabled={formik.isSubmitting || formik.isValidating}
      />
    </form>
  );
}

export default UserLoginFormWithValidator;
