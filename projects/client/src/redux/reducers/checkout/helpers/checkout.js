const getPromoPrice = (price, promo) => {
	if (promo.Promotion.id === 2) {
		return price - promo.value;
	} else if (promo.Promotion.id === 3) {
		return price - (promo.value * price) / 100;
	}
};

const accumulateItem = (item, summary) => {
	const quantity = item.quantity;
	const price = item.Inventory.Product.price;
	const promo = item.Inventory.promo;

	if (!promo || promo.Promotion.id === 4) {
		summary.subtotal += quantity * price;
		summary.raw.subtotal = summary.subtotal;
	} else {
		summary.subtotal += quantity * getPromoPrice(price, promo);
		summary.raw.subtotal = summary.subtotal;
	}
};

export const initializeSummary = (cart) => {
	const summary = {
		hasLoaded: true,
		subtotal: 0,
		logistic: 0,
		discount: 0,
		total: 0,
		raw: { subtotal: 0, logistic: 0 },
	};

	cart.forEach((item) => {
		accumulateItem(item, summary);
	});

	summary.total = summary.subtotal + summary.logistic;
	return summary;
};

export const getSummaryAfterVoucherRemoval = (summaryState) => {
	return;
};

export const getSummaryAfterVoucher = (summaryState, voucher) => {
	const summary = { ...summaryState };
	const promotion_id = voucher?.Voucher?.Promotion?.id;
	const raw_discount = voucher?.Voucher?.value;

	if (promotion_id === 2) {
		const subtotal = summary.raw.subtotal - raw_discount;
		return {
			...summary,
			subtotal,
			logistic: summary.raw.logistic,
			discount: raw_discount,
			total: subtotal + summary.raw.logistic,
		};
	}

	if (promotion_id === 3) {
		const max_discount = voucher?.Voucher?.max_discount;
		let discount = (raw_discount / 100) * summary.raw.subtotal;
		if (discount > max_discount) discount = max_discount;

		const subtotal = summary.raw.subtotal - discount;

		return {
			...summary,
			subtotal,
			logistic: summary.raw.logistic,
			discount,
			total: subtotal + summary.raw.logistic,
		};
	}

	if (promotion_id === 1) {
		let logistic = summary.raw.logistic - raw_discount;
		if (logistic < 0) logistic = 0;

		return { ...summary, logistic, discount: raw_discount, total: logistic + summary.raw.subtotal };
	}
};
