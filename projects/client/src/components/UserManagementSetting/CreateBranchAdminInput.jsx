import React from "react";
import InputGroup from "../InputGroup";
import SelectMenus from "../SelectMenus";
import axios from "axios";
import { useState, useEffect } from "react";

const CreateBranchAdminInput = ({ setInput }) => {
	const [cities, setCities] = useState([]);
	const [provinces, setProvinces] = useState([]);
	useEffect(() => {
		async function getCitiesAndProvinces() {
			const cityData = await axios.get("http://localhost:2000/api/data/cities");
			const provinceData = await axios.get(
				"http://localhost:2000/api/data/provinces"
			);
			setCities(cityData.data || []);
			setProvinces(provinceData.data || []);
		}
		getCitiesAndProvinces();
	}, []);
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup
				name="Email"
				type="email"
				inputKey="email"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				name="Password"
				type="password"
				inputKey="password"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				name="Confirm Password"
				type="password"
				inputKey="confirm_password"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				name="Store Name"
				type="text"
				inputKey="name"
				setInput={setInput}
				required={true}
			/>
			<SelectMenus
				name="Province"
				inputKey="province"
				setInput={setInput}
				required={true}
				data={provinces}
			/>
			<SelectMenus
				name="City"
				inputKey="city"
				setInput={setInput}
				required={true}
				data={cities}
			/>
		</div>
	);
};

export default CreateBranchAdminInput;
