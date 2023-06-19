const { Transaction_details } = require("../models/index.js");

const registerPayload = async (Transaction, payload) => {
	return payload.map((item) => {
		item.transaction_id = Transaction.id;
	});
};

const createTransactionDetailsQuery = async (Transaction, payload, transaction) => {
	const registeredData = await registerPayload(Transaction, payload);

	return await Transaction_details.bulkCreate([...registeredData], { transaction });
};

module.exports = { createTransactionDetailsQuery };
