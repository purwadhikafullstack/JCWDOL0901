import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BackButton from "../../components/BackButton";
import DeliveryAddress from "../../components/Order/DeliveryAddress";
import YourOrder from "../../components/Order/YourOrder";
const moment = require("moment");

const OrderHeader = ({ userData, user }) => {
	return (
		<div>
			<div className="flex flex-row items-center justify-center mx-auto">
				<div className="absolute left-2 lg:left-24">
					<BackButton color="text-green-400 h-fit mb-auto" url={-1} replace={{ replace: true }} />
				</div>
				<div className="my-6 font-semibold">Order Detail</div>
			</div>
		</div>
	);
};

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const orderStatusList = {
	1: "Menunggu Pembayaran",
	2: "Menunggu Konfirmasi Pembayaran",
	3: "Pesanan Diproses",
	4: "Pesanan Dikirim",
	5: "Pesanan Diterima",
	6: "Pesanan Dibatalkan",
};

const OrderStatus = ({ transaction }) => {
	return (
		<div className="py-6">
			<div className="mx-10">
				<div className="mb-4 font-semibold text-left">Order Status</div>
				<p className="text-sm font-medium text-gray-900 my-4 text-left">
					{orderStatusList[transaction.status_id]}
					<span> • </span>
					<span>{moment(transaction.updated_at).format("D MMM YY, HH:mm")}</span>
				</p>

				{transaction.status_id === 6 ? (
					<>
						<div className="bg-gray-200 rounded-full overflow-hidden">
							<div className="h-2 bg-red rounded-full" style={{ width: `100%` }} />
						</div>
						<div className="text-red text-center mt-6">Pesanan Dibatalkan</div>
					</>
				) : (
					<>
						<div className="bg-gray-200 rounded-full overflow-hidden">
							<div
								className="h-2 bg-green-400 rounded-full"
								style={{
									width: `calc((${
										transaction.status_id === 5 ? 6 : transaction.status_id
									} * 2 - 1) / 10 * 100%)`,
								}}
							/>
						</div>
						<div className="hidden sm:grid grid-cols-5 text-xs font-medium text-gray-500 mt-6">
							<div className="text-green-500 text-left">Menunggu Pembayaran</div>
							<div
								className={classNames(transaction.status_id > 1 ? "text-green-500" : "", "text-center")}
							>
								Menunggu Konfirmasi Pembayaran
							</div>
							<div
								className={classNames(transaction.status_id > 2 ? "text-green-500" : "", "text-center")}
							>
								Pesanan Diproses
							</div>
							<div
								className={classNames(transaction.status_id > 3 ? "text-green-500" : "", "text-center")}
							>
								Pesanan Dikirim
							</div>
							<div
								className={classNames(transaction.status_id > 4 ? "text-green-500" : "", "text-right")}
							>
								Pesanan Diterima
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

const OrderDetailLayout = ({ transaction, transaction_id }) => {
	const userData = useSelector((state) => state.user);
	const [user, setUser] = useState({});
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
		<div>
			<div className="flex lg:h-full lg:justify-center lg:py-12">
				<div className="flex flex-col divide-y-2 divide-gray-100 mx-auto w-full pb-32 min-h-screen bg-white lg:pb-10 lg:justify-between lg:min-h-fit lg:flex-col lg:my-auto lg:mx-20 lg:rounded-lg lg:shadow-xl">
					<OrderHeader userData={userData} user={user} />
					<OrderStatus transaction={transaction} />
					<DeliveryAddress transaction={transaction} />
					<YourOrder transaction={transaction} />
				</div>
			</div>
		</div>
	);
};

const getOrderDetail = (transaction_id) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/admin/transaction/${transaction_id}/detail`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

const AdminOrderDetail = () => {
	const { transaction_id } = useParams();
	const navigate = useNavigate();
	const [transaction, setTransaction] = React.useState(undefined);

	React.useEffect(() => {
		getOrderDetail(transaction_id)
			.then((result) => {
				if (!result.data.id) navigate("/404");
				setTransaction(result.data);
			})
			.catch((error) => {
				alert(error);
			});
	}, [transaction_id, navigate]);

	return transaction && <OrderDetailLayout transaction={transaction} transaction_id={transaction_id} />;
};

export default AdminOrderDetail;
