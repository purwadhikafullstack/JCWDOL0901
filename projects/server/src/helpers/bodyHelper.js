const getTransactionPayload = async (body, userData) => {
	return await {
		user_id: userData.id,
		branch_id: body.branch_id,
		address: body.address.detail,
		amount: body.summary.total,
		voucher_discount: body.summary.discount,
		voucher_id: body.voucher?.id || null,
	};
};

const getTransactionDetailPayload = async (body) => {
	const data = body.cart.map((item) => {
		return {
			inventory_id: item.Inventory.id,
			inventory_promotion_id: item.Inventory.promo?.Promotion?.id || null,
			name: item.Inventory.Product.name,
			quantity: item.quantity,
			price: item.Inventory.Product.price,
			branch_discount: item.Inventory.promo?.value || 0,
		};
	});
	return [...data];
};

module.exports = { getTransactionPayload, getTransactionDetailPayload };
