import React from "react";
import ErrorWarning from "../ErrorWarning";
import CompanyLogo from "../CompanyLogo.jsx";
import { useFormik } from "formik";
import { formikResetPasswordConfiguration } from "./config/formikResetPasswordConfiguration";
import ResetPasswordInputField from "./ResetPasswordInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = () => {
	const [error, setError] = React.useState("");
	const navigate = useNavigate();
	const formik = useFormik(formikResetPasswordConfiguration(setError, navigate));

	return (
		<div className="flex flex-col items-center min-w-fit shrink-0 px-6 bg-white sm:h-inherit sm:px-24 sm:py-8 sm:justify-center sm:rounded-r-xl">
			<div className="w-80">
				<CompanyLogo color={true} className="w-[100px] hidden mx-auto sm:block sm:mb-4" />
				<ErrorWarning error={error} />
				<form onSubmit={formik.handleSubmit} noValidate>
					<ResetPasswordInputField formik={formik} />
					<Button
						type="submit"
						name="Change Password"
						disabled={formik.isSubmitting || formik.isValidating}
					/>
				</form>
			</div>
		</div>
	);
};

export default ResetPasswordForm;
