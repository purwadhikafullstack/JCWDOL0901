import * as Yup from "yup";
import Swal from "sweetalert2";
import { createInventoryPromotion } from "../handlers/createProductPromoHandler.js";

const initialValues = {
	inventory_id: undefined,
	promotion_id: undefined,
	value: 0,
	start_at: new Date().toISOString().split("T")[0],
	expired_at: new Date().toISOString().split("T")[0],
};

const validateOnChange = true;
const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const inventory_id = Yup.number().typeError("Must be a number").required(requiredMessage);
const promotion_id = Yup.number().typeError("Must be a number").required(requiredMessage);

const value = Yup.number()
	.typeError("Must be a number")
	.required(requiredMessage)
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

const start_at = Yup.date("Must be a date")
	.required(requiredMessage)
	.test("Start Date Overlaps Ends Date", "Can't start after end date", (input, formik) => {
		return new Date(input) <= new Date(formik.parent.expired_at);
	});

const expired_at = Yup.date("Must be a date")
	.required(requiredMessage)
	.test("Ends Date Overlaps Start Date", "Can't end before start date", (input, formik) => {
		return new Date(input) >= new Date(formik.parent.start_at);
	});

const validationSchema = Yup.object({
	inventory_id,
	promotion_id,
	value,
	start_at,
	expired_at,
});

const onSubmitConfiguration = async (values, setError, navigate) => {
	await Swal.fire({
		title: "Create Promotion?",
		html: `Starts <b>${values.start_at}</b> Until <b>${values.expired_at}</b>`,
		icon: "question",
		showCancelButton: true,
		confirmButtonColor: "#0EB177",
		cancelButtonColor: "#d33",
		confirmButtonText: "Confirm",
	}).then(async result => {
		if (result.isConfirmed) {
			await createInventoryPromotion(values)
				.then(result => {
					Swal.fire("Success!", "Promotion Created!", "success");
					navigate(-1);
				})
				.catch(error => setError(error.message));
		}
	});
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
