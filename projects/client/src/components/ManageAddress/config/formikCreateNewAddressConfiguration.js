import * as Yup from "yup";

import { createNewAddressHandler } from "../handlers/createNewAddressHandler";

const initialValues = (address) => {
	return {
		label: "",
		city_id: 0,
		address: "",
	};
};

const validateOnChange = true;

const validateOnBlur = true;

const requiredMessage = "Field can't be empty";

const label = Yup.string().required(requiredMessage);
const city_id = Yup.string().test("Must select", requiredMessage, (input) => input > 0);
const address = Yup.string().required(requiredMessage);

const validationSchema = Yup.object({
	label,
	city_id,
	address,
});

const onSubmitConfiguration = async (values, navigate) => {
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
