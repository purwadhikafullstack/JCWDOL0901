import * as Yup from "yup";

import { createNewAddressHandler } from "../handlers/createNewAddressHandler";

const initialValues = (address) => {
	return {
		label: "",
		province_id: 0,
		city_id: 0,
		detail: "",
	};
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const label = Yup.string().required(requiredMessage);
const province_id = Yup.string().test("Must select", requiredMessage, (input) => input > 0);
const city_id = Yup.string().test("Must select", requiredMessage, (input) => input > 0);
const detail = Yup.string().required(requiredMessage);

const validationSchema = Yup.object({
	label,
	province_id,
	city_id,
	detail,
});

const onSubmitConfiguration = async (values, navigate) => {
	console.log(values);
	await createNewAddressHandler(values, navigate);
};

export const formikCreateNewAddressConfiguration = (navigate, address) => {
	return {
		initialValues: initialValues(address),
		onSubmit: async (values) => onSubmitConfiguration(values, navigate),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
