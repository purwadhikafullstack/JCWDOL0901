const ItemPrice = ({ item }) => {
	return (
		<div className="flex flex-row py-4 text-gray-200 text-sm">
			<div className="text-left">{item.quantity}x</div>
			<div className="px-4 text-left">{item.name}</div>
			<div className="px-4 text-right ml-auto text-black">Rp{item.price.toLocaleString("id")}</div>
		</div>
	);
};

const SubTotal = ({ subTotal }) => {
	return (
		<div className="flex flex-row pt-4 text-gray-200 text-sm">
			<div className="text-left">Sub Total</div>
			<div className="px-4 text-right ml-auto text-black">Rp{subTotal.toLocaleString("id")}</div>
		</div>
	);
};

const DeliveryCost = ({ deliveryCost }) => {
	return (
		<div className="flex flex-row pt-4 text-gray-200 text-sm">
			<div className="text-left">Delivery Cost</div>
			<div className="px-4 text-right ml-auto text-black">Rp{deliveryCost.toLocaleString("id")}</div>
		</div>
	);
};

const VoucherDiscount = ({ voucher_discount }) => {
	return (
		<div className="flex flex-row py-4 text-gray-200 text-sm">
			<div className="text-left">Voucher Discount</div>
			<div className="px-4 text-right ml-auto text-black">Rp{voucher_discount.toLocaleString("id")}</div>
		</div>
	);
};

const TotalPrice = ({ transaction }) => {
	return (
		<div className="flex flex-row py-4 text-gray-200 text-sm">
			<div className="text-left font-semibold text-gray-300">Total</div>
			<div className="px-4 text-right ml-auto text-black font-semibold">
				Rp{transaction.amount.toLocaleString("id")}
			</div>
		</div>
	);
};

const YourOrder = ({ transaction }) => {
	console.log(transaction);
	const subTotal = transaction.Transaction_details.reduce((total, num) => total + num.price * num.quantity, 0);
	const deliveryCost = 0;
	const voucher_discount = transaction.voucher_discount;
	return (
		<div className="py-6">
			<div className="mx-10 max-w-[800px]">
				<div className="mb-4 font-semibold text-left">Your Order</div>
				<div className="text-sm text-left">
					<span className="text-gray-200 mr-2">INV-{String(transaction.id).padStart(6, "0")}</span>
				</div>
				<div className="py-4 divide-y divide-gray-100">
					{transaction.Transaction_details.map((item, index) => {
						return <ItemPrice item={item} key={index} />;
					})}
					<div className="flex flex-col">
						<SubTotal subTotal={subTotal} />
						<DeliveryCost deliveryCost={deliveryCost} />
						<VoucherDiscount voucher_discount={voucher_discount} />
					</div>
					<TotalPrice transaction={transaction} />
				</div>
			</div>
		</div>
	);
};

export default YourOrder;
