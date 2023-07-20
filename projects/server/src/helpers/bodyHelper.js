const getPromoValue = (item) => {
	if (item.Inventory.promo?.Promotion?.id === 2) {
		return item.Inventory.promo.value;
	} else if (item.Inventory.promo?.Promotion?.id === 3) {
		return (item.Inventory.promo.value / 100) * item.Inventory.Product.price;
	}

	return 0;
};

const getCartAmount = async (Cart) => {
	let total = 0;

	await Cart.forEach((item) => {
		promo = getPromoValue(item);
		price = item.quantity * (item.Inventory.Product.price - promo);

		total = total + price;
	});

	return total;
};

const getTransactionPayload = async (body, user_id, Cart) => {
	return await {
		user_id: user_id,
		branch_id: body.branch.branch_id,
		address: body.address.detail,
		amount: (await getCartAmount(Cart)) - body.summary.discount + body.logistic.cost,
		voucher_discount: body.summary.discount,
		voucher_id: body.voucher?.id || null,
	};
};

const getTransactionDetailPayload = async (Cart) => {
	const data = await Cart.map((item) => {
		return {
			inventory_id: item.Inventory.id,
			inventory_promotion_id: item.Inventory.promo?.id || null,
			name: item.Inventory.Product.name,
			quantity: item.quantity,
			price: item.Inventory.Product.price,
			branch_discount: item.Inventory.promo?.value || 0,
		};
	});

	return [...data];
};

module.exports = { getTransactionPayload, getTransactionDetailPayload };
