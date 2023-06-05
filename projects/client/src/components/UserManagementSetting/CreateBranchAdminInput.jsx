import React from "react";
import InputGroup from "../InputGroup";
import SelectMenus from "../SelectMenus";
import axios from "axios";
import { useState, useEffect } from "react";

const CreateBranchAdminInput = ({ setInput }) => {
	const [cities, setCities] = useState([]);
	useEffect(() => {
		async function getCities() {
			const cartData = await axios.get("http://localhost:2000/api/data/cities");
			setCities(cartData.data || []);
		}
		getCities();
	}, []);
	return (
		<div className="flex flex-col items-center min-w-full">
			<InputGroup
				formName="Email"
				formType="email"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				formName="Password"
				formType="password"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				formName="Confirm Password"
				formType="password"
				setInput={setInput}
				required={true}
			/>
			<InputGroup
				formName="Store Name"
				formType="text"
				setInput={setInput}
				required={true}
			/>
			<SelectMenus
				formName="City"
				setInput={setInput}
				required={true}
				data={cities}
			/>
		</div>
	);
};

export default CreateBranchAdminInput;
