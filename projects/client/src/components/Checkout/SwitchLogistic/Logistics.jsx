import React from "react";
import LogisticOptions from "./LogisticOptions.jsx";
import { useSelector } from "react-redux";
import { postLogisticServices } from "../handlers/checkoutHandler.js";
import LoadingLogistic from "./LoadingLogistic";

const Logistics = () => {
	const checkout = useSelector((state) => state.checkout);
	const [services, setServices] = React.useState(undefined);

	React.useEffect(() => {
		postLogisticServices(checkout)
			.then((result) => {
				setServices(result.data);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return services ? (
		services.map((value, index) => {
			return <LogisticOptions services={value} courier={value.code} key={index} />;
		})
	) : (
		<LoadingLogistic />
	);
};

export default Logistics;
