const { readCartQuery } = require("../queries/Carts");

const getTransactionPayload = async (body, user_id) => {
	return await {
		user_id: user_id,
		branch_id: body.branch.branch_id,
		address: body.address.detail,
		amount: body.summary.total,
		voucher_discount: body.summary.discount,
		voucher_id: body.voucher?.id || null,
	};
};

const getTransactionDetailPayload = async (user_id) => {
	const Cart = await readCartQuery({ user_id });

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
