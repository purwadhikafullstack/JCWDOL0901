const { sequelize } = require("../models/index.js");
const { startCreateTransactionErrorHandler } = require("../errors/serviceError.js");
const { createTransactionQuery } = require("../queries/Transactions.js");
const { createTransactionDetailsQuery } = require("../queries/Transaction_details.js");

module.exports = {
	startCreateTransaction: async (user_id, payload) => {
		return new Promise(async (resolve, reject) => {
			const transaction = sequelize.transaction();
			try {
				const Transaction = await createTransactionQuery(user_id, payload.Transaction, transaction);
				await createTransactionDetailsQuery(Transaction, payload.Transaction_detail, transaction);

				return await resolve("Order Created!");
			} catch (error) {
				return await reject(await startCreateTransactionErrorHandler(error));
			}
		});
	},
};
