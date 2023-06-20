const { sequelize } = require("../models/index.js");
const { startCreateTransactionErrorHandler } = require("../errors/serviceError.js");
const { createTransactionQuery } = require("../queries/Transactions.js");
const { createTransactionDetailsQuery } = require("../queries/Transaction_details.js");

module.exports = {
	startCreateTransaction: async (payload) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const Transaction = await createTransactionQuery(payload.Transaction, transaction);
				await createTransactionDetailsQuery(Transaction, payload.Transaction_detail, transaction);

				await transaction.commit();
				return await resolve("Order Created!");
			} catch (error) {
				await transaction.rollback();
				return await reject(await startCreateTransactionErrorHandler(error));
			}
		});
	},
};
