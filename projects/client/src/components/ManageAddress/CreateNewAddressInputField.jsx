import React from "react";
import InputGroup from "../InputGroup";
import SelectMenus from "../SelectMenus";
import axios from "axios";
import { useState, useEffect } from "react";

const CreateNewAddressInputField = ({ formik, address }) => {
	const [cities, setCities] = useState([]);
	const [provinces, setProvinces] = useState([]);
	const [provinceId, setProvinceId] = useState(address ? address.City.province_id : 0);
	useEffect(() => {
		async function getCitiesAndProvinces() {
			const cityData = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/data/province/${provinceId}/cities`,
			);
			const provinceData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/data/provinces`);
			setCities(cityData.data || []);
			setProvinces(provinceData.data || []);
		}
		getCitiesAndProvinces();
	}, [provinceId]);
	return (
		<div className="flex flex-col items-center min-w-full mb-auto gap-2">
			<InputGroup name="Label" type="text" inputKey="label" formik={formik} />
			<SelectMenus
				name="Province"
				inputKey="province_id"
				formik={formik}
				ignore={true}
				setInput={setProvinceId}
				data={provinces}
			/>
			<SelectMenus name="City" inputKey="city_id" formik={formik} data={cities} />
			<InputGroup name="Detail Address" type="text" inputKey="detail" formik={formik} />
		</div>
	);
};

export default CreateNewAddressInputField;
