import React from "react";
import ImagePreview from "../../components/UploadImagePreview";
import Button from "../../components/Button";
import CompanyLogo from "../../components/CompanyLogo";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { formikUploadProofConfiguration } from "./config/UploadPaymentProofFormikConfiguration";
import FileUploadInputGroup from "../../components/FileUploadInputGroup";

const UploadPanel = ({ transaction_id }) => {
	const [file, setFile] = React.useState();
	const navigate = useNavigate();
	const formik = useFormik(formikUploadProofConfiguration(transaction_id, navigate));

	return (
		<div className="flex flex-col items-center justify-center px-6 pb-6">
			<CompanyLogo color={true} className="w-[70px] mx-auto mt-2 z-40 hidden sm:block" />
			<ImagePreview file={file} />
			<form encType="multipart/form-data" onSubmit={formik.handleSubmit} noValidate>
				<FileUploadInputGroup
					name="Upload Proof"
					type="file"
					formik={formik}
					inputKey="proof"
					setFile={setFile}
				/>
				<Button
					type="submit"
					name="Upload"
					disabled={formik.isSubmitting || formik.isValidating}
					pending={formik.isSubmitting}
				>
					<span className="material-symbols-rounded text-green-100 mr-2">upload_file</span>
				</Button>
			</form>
		</div>
	);
};

export default UploadPanel;
