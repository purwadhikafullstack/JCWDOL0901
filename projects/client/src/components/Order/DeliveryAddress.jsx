const DeliveryAddress = ({ transaction }) => {
	return (
		<div className="py-6">
			<div className="mx-10">
				<div className="mb-4 font-semibold text-left">Delivery</div>
				<div className="mb-4 text-sm text-left uppercase text-gray-300 font-medium">
					{transaction.Logistic.code}-{transaction.Logistic.service}
				</div>
				<div className="mb-1 text-gray-200 text-left">From:</div>
				<div className="mb-4 text-sm text-left">{transaction.Branch.name}</div>
				<div className="mb-1 text-gray-200 text-left">To:</div>
				<div className="mb-2 text-sm text-left">{transaction.address}</div>
			</div>
		</div>
	);
};

export default DeliveryAddress;
