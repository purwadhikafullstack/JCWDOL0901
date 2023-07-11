const { Logistics } = require("../models/index.js");

const createLogisticsQuery = async (Transaction, logistic, transaction) => {
	const { code, service, shipping_cost } = logistic;

	return await Logistics.create({ transaction_id: Transaction.id, code, service, shipping_cost }, { transaction });
};

module.exports = { createLogisticsQuery };
