import React from "react";
import InputGroup from "../InputGroup";
import RowSpace from "../RowSpace";
import SelectMenus from "../SelectMenus";
import axios from "axios";
import { useState, useEffect } from "react";

const RegisterInputField = ({ formik }) => {
	const [cities, setCities] = useState([]);
	const [provinces, setProvinces] = useState([]);
	const [provinceId, setProvinceId] = useState(6);
	useEffect(() => {
		async function getCitiesAndProvinces() {
			const cityData = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/data/province/${provinceId}/cities`
			);
			const provinceData = await axios.get(
				`${process.env.REACT_APP_API_BASE_URL}/data/provinces`
			);
			setCities(cityData.data || []);
			setProvinces(provinceData.data || []);
		}
		getCitiesAndProvinces();
	}, [provinceId]);
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup name="Email" type="email" inputKey="email" formik={formik} />
			<div className="flex flex-row pb-4">
				<InputGroup
					name="Password"
					type="password"
					inputKey="password"
					formik={formik}
				/>
				<RowSpace />
				<InputGroup
					name="Confirm Password"
					type="password"
					inputKey="confirm_password"
					formik={formik}
				/>
			</div>
			<InputGroup
				name="Branch Name"
				type="text"
				inputKey="name"
				formik={formik}
			/>
			<SelectMenus
				name="Province"
				inputKey="province_id"
				formik={formik}
				ignore={true}
				setInput={setProvinceId}
				data={provinces}
			/>
			<SelectMenus
				name="City"
				inputKey="city_id"
				formik={formik}
				data={cities}
			/>
		</div>
	);
};

export default RegisterInputField;
