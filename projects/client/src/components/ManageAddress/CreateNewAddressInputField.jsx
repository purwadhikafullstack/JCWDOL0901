import React from "react";
import InputGroup from "../InputGroup";
import axios from "axios";
import { useState, useEffect } from "react";
import SelectGroup from "../SelectGroup";

const getProvinces = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const provinceData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/data/provinces`);

			resolve({ data: provinceData.data });
		} catch (error) {
			reject(error);
		}
	});
};

const getCities = (formik) => {
	console.log(formik.values);
	return new Promise(async (resolve, reject) => {
		try {
			const cityData = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/data/province/${formik.values.province_id}/cities`,
			);

			resolve({ data: cityData.data });
		} catch (error) {
			reject(error);
		}
	});
};

const CreateNewAddressInputField = ({ formik, address }) => {
	return (
		<div className="flex flex-col items-center min-w-full mb-auto gap-2">
			<InputGroup name="Label" type="text" inputKey="label" formik={formik} />
			<SelectGroup name="Province" getter={getProvinces} inputKey="province_id" formik={formik} />
			<SelectGroup name="City" getter={() => getCities(formik)} inputKey="city_id" formik={formik} />
			<InputGroup name="Detail Address" type="text" inputKey="detail" formik={formik} />
		</div>
	);
};

export default CreateNewAddressInputField;
