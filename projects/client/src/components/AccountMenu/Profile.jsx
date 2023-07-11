import { ChevronRightIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MenuButton = ({ menu }) => {
	const navigate = useNavigate();
	return (
		<li key={menu.name}>
			<button className="block hover:bg-gray-100 w-full" onClick={() => navigate(menu.nav)}>
				<div className="flex flex-row items-center px-4 py-4 sm:px-6">
					<div className="min-w-0 flex-1 flex items-center">
						<div className="flex-shrink-0">
							<menu.icon className="text-gray-300 mx-3 flex-shrink-0 h-6 w-6" />
						</div>
						<p className="mx-6 font-medium text-gray-300 truncate">{menu.name}</p>
					</div>
					<ChevronRightIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
				</div>
			</button>
		</li>
	);
};

export default function Profile() {
	const userData = useSelector((state) => state.user);
	const [user, setUser] = useState();
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_BASE_URL}/profile`, {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
			})
			.then((result) => {
				setUser(result.data);
			})
			.catch();
	}, []);
	return (
		<>
			{userData?.hasLogged ? (
				<div className="mt-6 sm:mx-2">
					<h1 className="text-left font-bold mb-4 ml-6 text-2xl text-gray-400 capitalize">
						Hey {user?.name}
					</h1>
					<div className="bg-white overflow-hidden sm:rounded-md mb-6 flex justify-center sm:justify-start sm:ml-6">
						<div className="bg-green-200 min-w-80 w-5/6 sm:w-96 text-white font-semibold rounded-lg p-4 text-left flex overflow-hidden">
							<img src="/assets/images/gratis_ongkir.png" className="h-24 mr-4" alt="gratis ongkir" />
							<div className="flex flex-col">
								<div className="mb-1">Dapatkan Gratis Ongkir 25rb</div>
								<div className=" font-normal text-xs mb-1">
									Bagikan & ajak temanmu daftar pakai kode referral
								</div>
								<div className=" bg-green-400 w-fit px-1">{user?.referral_code}</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}
