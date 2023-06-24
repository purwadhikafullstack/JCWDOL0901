import * as Yup from "yup";
import { postProof } from "../handler/uploadPaymentProofHandler";

const initialValues = (transaction_id) => {
	return { transaction_id, proof: "" };
};

const validateOnChange = true;
const validateOnBlur = false;

const requiredMessage = "Please upload your payment proof";

const proof = Yup.mixed()
	.required(requiredMessage)
	.test("file size", "The file is too large", (value) => {
		return value && value.size <= 1024 * 1024;
	})
	.test("type", "Only accept .jpeg, .jpg, .png, and .pdf formats", (value) => {
		const supportedFormats = ["image/jpeg", "image/gif", "image/png", "application/pdf"];
		return value && supportedFormats.includes(value.type);
	});

const validationSchema = Yup.object({
	proof,
});

const onSubmitConfiguration = async (values) => {
	const data = new FormData();
	await data.append("transaction_id", values.transaction_id);
	await data.append("proof", values.proof);

	await postProof(data);
};

export const formikUploadProofConfiguration = (transaction_id) => {
	return {
		initialValues: initialValues(transaction_id),
		onSubmit: async (values) => onSubmitConfiguration(values),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
