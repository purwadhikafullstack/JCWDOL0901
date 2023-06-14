import { useState, useEffect, useRef } from "react";
import axios from "axios";

const isSuperAdmin = async setSuperAdmin => {
	const token = localStorage.getItem("token");
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const adminData = await axios.get(
		`${process.env.REACT_APP_API_BASE_URL}/auth/admin/super`,
		config
	);
	setSuperAdmin(adminData.data.super || false);
};

const NavButton = ({ item, location }) => {
	return (
		<item.icon
			className={`text-green-100 mr-3 flex-shrink-0 h-6 w-6 ${
				item.href === location ? "bg-green-100 text-green-400" : "hover:bg-green-100/20"
			}`}
			aria-hidden="true"
		/>
	);
};

export default function SideBarNavButton({ item, location, navigate }) {
	const [superAdmin, setSuperAdmin] = useState(false);
	useEffect(() => {
		isSuperAdmin(setSuperAdmin);
	}, []);

	return (
		<button
			key={item.name}
			className={`w-full text-green-100 flex items-center px-2 py-2 text-sm font-medium rounded-md ${
				item.href === location ? "bg-green-100 text-green-400" : "hover:bg-green-100/20"
			} ${item.super === !superAdmin ? "hidden" : ""}`}
			onClick={() => navigate(item.href)}
		>
			<NavButton item={item} location={location} />
			{item.name}
		</button>
	);
}
