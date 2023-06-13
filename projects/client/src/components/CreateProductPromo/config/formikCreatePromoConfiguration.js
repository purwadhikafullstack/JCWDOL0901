import * as Yup from "yup";
import { createInventoryPromotion } from "../handlers/createProductPromoHandler.js";

const initialValues = {
	inventory_id: 0,
	promotion_id: 0,
	value: 0,
	start_at: new Date().toISOString().split("T")[0],
	expired_at: new Date().toISOString().split("T")[0],
};

const validateOnChange = true;
const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const inventory_id = Yup.number().typeError("Must be a number").required(requiredMessage);
const promotion_id = Yup.number().typeError("Must be a number").required(requiredMessage);
const value = Yup.number().typeError("Must be a number").required(requiredMessage);
const expired_at = Yup.date("Must be a date").required(requiredMessage);

const validationSchema = Yup.object({
	inventory_id,
	promotion_id,
	value,
	expired_at,
});

const onSubmitConfiguration = async (values, setError, navigate) => {
	await createInventoryPromotion(values)
		.then(result => {
			navigate(-1);
		})
		.catch(error => setError(error));
};

export const formikConfiguration = (setError, navigate) => {
	return {
		initialValues,
		onSubmit: async values => onSubmitConfiguration(values, setError, navigate),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
