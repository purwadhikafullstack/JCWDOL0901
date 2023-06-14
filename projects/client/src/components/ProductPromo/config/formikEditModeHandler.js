import * as Yup from "yup";
import { patchInventoryPromotions } from "../handlers/productPromoHandler";

const initialValues = item => {
	return {
		id: item.id,
		inventory_id: item.inventory_id,
		promotion_id: item.promotion_id,
		value: item.value,
		start_at: item.start_at,
		expired_at: item.expired_at,
	};
};

const validateOnChange = true;
const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const value = Yup.number()
	.typeError("Must be a number")
	.test("Must be greater than or equal to 1", "Must be a positve number", input => {
		return input >= 1;
	})
	.test("Percentage", "Must be lesser than 101%", (input, formik) => {
		if (formik.parent.promotion_id === 3) {
			return input <= 100;
		}
		return true;
	})
	.test("Buy one get one", "Must be 1", (input, formik) => {
		if (formik.parent.promotion_id === 4) {
			return input === 1;
		}
		return true;
	});

const start_at = Yup.date()
	.typeError("Must be a date")
	.required(requiredMessage)
	.test("Start Date Overlaps Ends Date", "Can't start after end date", (input, formik) => {
		return new Date(input) <= new Date(formik.parent.expired_at);
	});

const expired_at = Yup.date()
	.typeError("Must be a date")
	.required(requiredMessage)
	.test("Ends Date Overlaps Start Date", "Can't end before start date", (input, formik) => {
		return new Date(input) >= new Date(formik.parent.start_at);
	});

const validationSchema = Yup.object({
	value,
	start_at,
	expired_at,
});

const onSubmitConfiguration = async (values, setError) => {
	await patchInventoryPromotions(values)
		.then(result => window.location.reload(false))
		.catch(error => setError(error.message));
};

export const formikEditModeConfiguration = (setError, item, setEditMode) => {
	return {
		initialValues: initialValues(item),
		onSubmit: async values => onSubmitConfiguration(values, setError),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
