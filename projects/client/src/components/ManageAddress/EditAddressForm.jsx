import React from "react";
import CreateNewAddressInputField from "./CreateNewAddressInputField";
import Button from "../Button.jsx";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { formikEditAddressConfiguration } from "./config/formikEditAddressConfiguration";

const EditAddressForm = ({ address }) => {
	const navigate = useNavigate();
	const formik = useFormik(formikEditAddressConfiguration(navigate, address));
	return (
		<div className="h-full items-center min-w-fit shrink-0 flex flex-col pb-10 px-6">
			<form onSubmit={formik.handleSubmit} noValidate className="h-full">
				<div className="flex flex-col h-full">
					<div className="mb-auto mt-6">
						<CreateNewAddressInputField formik={formik} address={address} />
					</div>
					<Button type="submit" name="Save Address" disabled={formik.isSubmitting} />
				</div>
			</form>
		</div>
	);
};

export default EditAddressForm;
