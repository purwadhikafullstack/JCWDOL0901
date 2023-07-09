const DeliveryAddress = ({ transaction }) => {
	return (
		<div className="py-6">
			<div className="mx-10">
				<div className="mb-4 font-semibold text-left">Delivery Address</div>
				<div className="text-sm text-left">{transaction.address}</div>
			</div>
		</div>
	);
};

export default DeliveryAddress;
