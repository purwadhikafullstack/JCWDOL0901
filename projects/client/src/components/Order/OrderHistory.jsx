/* This example requires Tailwind CSS v2.0+ */
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getUserTransactions } from "./handlers/orderHandler";
import { setUserLogin } from "../../redux/reducers/user/userAction";
const moment = require("moment");

const orderStatusList = {
	1: "Menunggu Pembayaran",
	2: "Menunggu Konfirmasi Pembayaran",
	3: "Diproses",
	4: "Dikirim",
	5: "Pesanan Diterima",
	6: "Dibatalkan",
};

const OrderList = ({ item }) => {
	const navigate = useNavigate();
	return (
		<li className="rounded-lg border-2 border-gray-200/20">
			<button className="block hover:bg-gray-100/50 w-full" onClick={() => navigate("detail/" + item.id)}>
				<div className="flex flex-row items-center px-4 py-4 sm:px-6">
					<div className="min-w-0 flex-1 flex items-center">
						<div className="flex-shrink-0">
							<img
								src={
									process.env.REACT_APP_IMAGE_BASE_URL +
									item?.Transaction_details[0]?.Inventory?.Product?.image
								}
								alt={item?.Transaction_details[0]?.name}
								className="h-10"
							/>
						</div>
						<div className="flex flex-col text-left text-xs gap-1">
							<p className="mx-6 font-medium text-gray-400 truncate">
								<span className="text-gray-200 mr-2">INV-{String(item.id).padStart(6, "0")}</span>
								<div>
									<span className="font-semibold"> {orderStatusList[item.status_id]}</span>
								</div>
							</p>
							<p className="mx-6 font-medium text-gray-300 truncate">
								<span>{moment(item.updated_at).format("D MMM YY, HH:mm")}</span>
								<span> • </span>
								<span>{item.Transaction_details.length} produk</span>
							</p>
						</div>
					</div>
					<ChevronRightIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
				</div>
			</button>
		</li>
	);
};

export default function OrderHistory() {
	const user = useSelector((state) => state.user);
	const [data, setData] = React.useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	React.useEffect(() => {
		// const query = generateUrlQuery(name, startDate, endDate, filterBy, filter, sort, order, page);
		getUserTransactions()
			.then((result) => {
				setData(result?.data?.rows);
				// setMaxPage(Math.ceil(result.data.count / 5));
			})
			.catch((error) => {
				if (error?.response?.status === 403) {
					dispatch(setUserLogin({ hasLogged: false, avatar: "", username: "" }));
					navigate(`/login`, {
						state: {
							authGuard: true,
						},
					});
				}
			});
	}, []);

	return (
		<div className="mb-6 mx-4">
			<div className="bg-white pt-6 pb-4 fixed -top-1 sm:static w-full">
				<h1 className="text-center font-bold sm:ml-6 text-lg text-gray-400">Order History</h1>
			</div>
			<div className="bg-white overflow-hidden mb-6 mt-20 sm:mt-4">
				<ul className="flex flex-col gap-2 pb-16">
					{user.hasLogged ? data?.map((item, index) => <OrderList item={item} key={index} />) : null}
				</ul>
			</div>
		</div>
	);
}
