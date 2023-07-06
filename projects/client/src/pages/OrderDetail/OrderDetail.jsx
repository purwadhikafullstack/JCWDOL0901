import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrderDetailLayout = ({ transaction, transaction_id }) => {
	console.log(transaction);
	return <div>{JSON.stringify(transaction)}</div>;
};

const getOrderDetail = (transaction_id) => {
	return axios.get(`${process.env.REACT_APP_API_BASE_URL}/transaction/${transaction_id}`, {
		headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	});
};

const OrderDetail = () => {
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
	}, [transaction_id]);

	return transaction && <OrderDetailLayout transaction={transaction} transaction_id={transaction_id} />;
};

export default OrderDetail;
