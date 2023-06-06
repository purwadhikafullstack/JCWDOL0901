import React from "react";
import CreateBranchAdminInputField from "./CreateBranchAdminInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikCreateBranchAdminConfiguration } from "./config/formikCreateBranchAdminConfiguration";

const CreateBranchAdminFormWithValidator = ({ setError }) => {
	const [busy, setBusy] = React.useState(false);
	const navigate = useNavigate();

	const formik = useFormik(
		formikCreateBranchAdminConfiguration(setError, setBusy, navigate)
	);

	return (
		<form onSubmit={formik.handleSubmit} noValidate>
			<CreateBranchAdminInputField formik={formik} />
			<Button type="submit" name="Create" disabled={busy} />
		</form>
	);
};

export default CreateBranchAdminFormWithValidator;
