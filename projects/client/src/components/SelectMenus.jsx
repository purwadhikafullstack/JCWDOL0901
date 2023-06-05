import axios from "axios";
import { useState, useEffect } from "react";

export default function SelectMenus() {
	const [cities, setCities] = useState([]);
	useEffect(() => {
		async function getCities() {
			const cartData = await axios.get(
				"http://localhost:2000/api/auth/admin/list?page=1"
			);
			setCities(cartData.data || []);
		}
		getCities();
	}, []);
	console.log(cities);
	return (
		<div>
			<label htmlFor="city" className="block text-sm text-white">
				City
			</label>
			<select
				id="city"
				name="city"
				className="bg-gray-100 text-gray-500 placeholder-gray-200 border-2 border-white active:bg-white focus:border-green-500 focus:outline-none focus:border-2 focus:bg-white focus:text-black rounded-lg text-sm w-full p-2.5"
				defaultValue="Canada"
			>
				<option>United States</option>
				<option>Canada</option>
				<option>Mexico</option>
			</select>
		</div>
	);
}
