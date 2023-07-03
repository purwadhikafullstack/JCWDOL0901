import * as Yup from "yup";

import { editAddressHandler } from "../handlers/editAddressHandler";

const initialValues = (address) => {
	return {
		label: address.label,
		detail: address.detail,
		province_id: address.City.province_id,
		city_id: address.city_id,
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
	city_id,
	province_id,
	detail,
});

const onSubmitConfiguration = async (values, navigate, address) => {
	await editAddressHandler(values, navigate, address);
};

export const formikEditAddressConfiguration = (navigate, address) => {
	return {
		initialValues: initialValues(address),
		onSubmit: async (values) => onSubmitConfiguration(values, navigate, address),
		validateOnChange,
		validateOnBlur,
		validationSchema,
	};
};
