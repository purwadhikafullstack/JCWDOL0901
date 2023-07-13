import { toCurrency } from "../../helper/currency";

const ItemPrice = ({ item }) => {
	return (
		<div className="flex flex-row py-4 text-gray-300 text-sm">
			<div className="text-left">{item.quantity}x</div>
			<div className="px-4 text-left">{item.name}</div>
			<div className="px-4 text-right ml-auto text-red">{item?.Inventory_promotion?.Promotion?.name}</div>
			{item?.Inventory_promotion?.Promotion?.id === 2 || item?.Inventory_promotion?.Promotion?.id === 3 ? (
				<div className="px-4 text-right text-gray-200 line-through">
					{toCurrency(item.price * item.quantity)}
				</div>
			) : null}

			{item?.Inventory_promotion?.Promotion?.id === 2 ? (
				<div className="px-4 text-right text-black">
					{toCurrency((item.price - item.branch_discount) * item.quantity)}
				</div>
			) : item?.Inventory_promotion?.Promotion?.id === 3 ? (
				<div className="px-4 text-right text-black">
					{toCurrency((item.price - (item.branch_discount / 100) * item.price) * item.quantity)}
				</div>
			) : (
				<div className="px-4 text-right text-black">{toCurrency(item.price * item.quantity)}</div>
			)}
		</div>
	);
};

const SubTotal = ({ subTotal }) => {
	return (
		<div className="flex flex-row pt-4 text-gray-200 text-sm">
			<div className="text-left">Sub Total</div>
			<div className="px-4 text-right ml-auto text-black">{toCurrency(subTotal)}</div>
		</div>
	);
};

const DeliveryCost = ({ deliveryCost }) => {
	return (
		<div className="flex flex-row pt-4 text-gray-200 text-sm">
			<div className="text-left">Delivery Cost</div>
			<div className="px-4 text-right ml-auto text-black">{toCurrency(deliveryCost)}</div>
		</div>
	);
};

const VoucherDiscount = ({ voucher_discount }) => {
	return (
		<div className="flex flex-row py-4 text-gray-200 text-sm">
			<div className="text-left">Voucher Discount</div>
			<div className="px-4 text-right ml-auto text-red">{toCurrency(voucher_discount)}</div>
		</div>
	);
};

const TotalPrice = ({ transaction }) => {
	return (
		<div className="flex flex-row py-4 text-gray-200 text-sm">
			<div className="text-left font-semibold text-gray-300">Total</div>
			<div className="px-4 text-right ml-auto text-black font-semibold">{toCurrency(transaction.amount)}</div>
		</div>
	);
};

const YourOrder = ({ transaction }) => {
	const deliveryCost = transaction.Logistic.shipping_cost;
	const voucher_discount = transaction.voucher_discount;
	const subTotal = transaction.amount + voucher_discount - deliveryCost;
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
