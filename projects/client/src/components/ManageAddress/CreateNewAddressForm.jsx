import React from "react";
import CreateNewAddressInputField from "./CreateNewAddressInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikCreateNewAddressConfiguration } from "./config/formikCreateNewAddressConfiguration";

const CreateNewAddressForm = () => {
	const navigate = useNavigate();
	const formik = useFormik(formikCreateNewAddressConfiguration(navigate));
	return (
		<div className="h-full items-center min-w-fit shrink-0 flex flex-col pb-10 px-6">
			<form onSubmit={formik.handleSubmit} noValidate className="h-full">
				<div className="flex flex-col h-full">
					<div className="mb-auto mt-6">
						<CreateNewAddressInputField formik={formik} />
					</div>
					<Button type="submit" name="Create" disabled={formik.isSubmitting} pending={formik.isSubmitting} />
				</div>
			</form>
		</div>
	);
};

export default CreateNewAddressForm;
