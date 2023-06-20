const getPromoPrice = (price, promo) => {
	if (promo.Promotion.id === 2) {
		let discountedPrice = price - promo.value;
		if (discountedPrice < 0) discountedPrice = 0;

		return discountedPrice;
	} else if (promo.Promotion.id === 3) {
		return price - (promo.value * price) / 100;
	}
};

export const determineBranch = (payload) => {
	return {
		branch_id: payload[0]?.Inventory?.Branch?.id || null,
		city_id: payload[0]?.Inventory?.Branch?.City?.id,
	};
};

const accumulateItem = (item, summary) => {
	const quantity = item.quantity;
	const price = item.Inventory.Product.price;
	const promo = item.Inventory.promo;

	summary.weight += quantity * item.Inventory.Product.weight;

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
		weight: 0,
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

export const resetSummary = (summaryState) => {
	const raw = summaryState.raw;

	return {
		...summaryState,
		subtotal: raw.subtotal,
		logistic: raw.logistic,
		discount: 0,
		total: raw.subtotal + raw.logistic,
	};
};

const handleNominalDiscount = (summary, raw_discount) => {
	let subtotal = summary.raw.subtotal - raw_discount;
	if (subtotal < 0) subtotal = 0;

	return {
		...summary,
		subtotal,
		logistic: summary.raw.logistic,
		discount: raw_discount,
		total: subtotal + summary.raw.logistic,
	};
};

const handlePercentageDiscount = (summary, raw_discount, voucher) => {
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
};

const handleLogisticDiscount = (summary, raw_discount) => {
	let logistic = summary?.raw?.logistic - raw_discount;
	if (logistic < 0) logistic = 0;
	return { ...summary, logistic, discount: raw_discount, total: logistic + summary?.raw?.subtotal };
};

export const getSummaryAfterVoucher = (summaryState, voucher) => {
	const summary = { ...summaryState };
	const promotion_id = voucher?.Voucher?.Promotion?.id;
	const raw_discount = voucher?.Voucher?.value;

	if (promotion_id === 2) {
		return handleNominalDiscount(summary, raw_discount);
	}

	if (promotion_id === 3) {
		return handlePercentageDiscount(summary, raw_discount, voucher);
	}

	if (promotion_id === 1) {
		return handleLogisticDiscount(summary, raw_discount);
	}
};

export const getSummaryAfterLogistic = (summary, cost) => {
	return {
		...summary,
		logistic: cost,
		total: summary?.raw?.subtotal + cost,
		raw: { ...summary?.raw, logistic: cost },
	};
};

export const getLogisticData = (payload) => {
	return {
		code: payload.courier,
		service: payload.logistic.service,
		cost: payload.logistic.cost[0].value,
	};
};
