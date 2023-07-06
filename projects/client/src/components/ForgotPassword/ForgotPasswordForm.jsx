import React from "react";
import ErrorWarning from "../ErrorWarning";
import CompanyLogo from "../CompanyLogo.jsx";
import { useFormik } from "formik";
import { formikForgotPasswordConfiguration } from "./config/formikForgotPasswordConfiguration";
import ForgotPasswordInputField from "./ForgotPasswordInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";

const ForgotPasswordForm = () => {
	const [error, setError] = React.useState("");
	const navigate = useNavigate();
	const formik = useFormik(formikForgotPasswordConfiguration(setError, navigate));

	return (
		<div className="flex flex-col items-center min-w-fit shrink-0 px-6 bg-white sm:h-inherit sm:px-24 sm:py-8 sm:justify-center sm:rounded-r-xl">
			<div className="w-80">
				<CompanyLogo color={true} className="w-[100px] hidden mx-auto sm:block sm:mb-4" />
				<ErrorWarning error={error} />
				<div className="text-green-400 mb-10">
					Enter the email associated with your account to reset your password.
				</div>
				<form onSubmit={formik.handleSubmit} noValidate>
					<ForgotPasswordInputField formik={formik} />
					<Button
						type="submit"
						name="Send verification email"
						disabled={formik.isSubmitting || formik.isValidating}
						pending={formik.isSubmitting}
					/>
				</form>
			</div>
		</div>
	);
};

export default ForgotPasswordForm;
