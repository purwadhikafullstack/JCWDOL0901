import { useSelector } from "react-redux";

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
	const admin = useSelector(state => state.admin);

	return (
		<button
			key={item.name}
			className={`w-full text-green-100 flex items-center px-2 py-2 text-sm font-medium rounded-md ${
				item.href === location ? "bg-green-100 text-green-400" : "hover:bg-green-100/20"
			} ${item.super === !admin.superAdmin ? "hidden" : ""}`}
			onClick={() => navigate(item.href)}
		>
			<NavButton item={item} location={location} />
			{item.name}
		</button>
	);
}
