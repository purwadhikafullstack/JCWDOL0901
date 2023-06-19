const getPromoPrice = (price, promo) => {
	if (promo.Promotion.id === 2) {
		return price - promo.value;
	} else if (promo.Promotion.id === 3) {
		return price - (promo.value * price) / 100;
	}
};

export const initializeSummary = (cart) => {
	const summary = { subtotal: 0, logistic: 0, total: 0 };

	cart.forEach((item) => {
		const quantity = item.quantity;
		const price = item.Inventory.Product.price;
		const promo = item.Inventory.promo;

		if (!promo || promo.Promotion.id === 4) {
			summary.subtotal += quantity * price;
		} else {
			summary.subtotal += quantity * getPromoPrice(price, promo);
		}
	});

	summary.total = summary.subtotal + summary.logistic;

	return summary;
};
