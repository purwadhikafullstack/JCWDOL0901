const { Transaction_details } = require("../models/index.js");

const registerPayload = async (Transaction, payload) => {
	payload.forEach((item) => {
		item.transaction_id = Transaction.id;
	});
	return payload;
};

const createTransactionDetailsQuery = async (Transaction, payload, transaction) => {
	const registeredData = await registerPayload(Transaction, payload);
	return await Transaction_details.bulkCreate([...registeredData], { transaction });
};

module.exports = { createTransactionDetailsQuery };
