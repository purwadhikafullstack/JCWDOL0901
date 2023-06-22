import React from "react";
import { useSelector } from "react-redux";
import { postLogisticServices } from "../handlers/checkoutHandler";
import CostDetail from "./CostDetail";
import LoadingLogistic from "./LoadingLogistic";

const LogisticOptions = ({ courier }) => {
	const checkout = useSelector((state) => state.checkout);
	const [services, setServices] = React.useState(undefined);

	React.useEffect(() => {
		postLogisticServices(checkout, courier)
			.then((result) => {
				setServices(result.data[0]);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);

	return services ? (
		<div className="flex flex-col">
			<span className="font-bold text-left uppercase bg-green-300 text-green-100 pl-5 py-2">{services.name}</span>
			<CostDetail costs={services.costs} courier={courier} />
		</div>
	) : (
		<LoadingLogistic />
	);
};

export default LogisticOptions;
