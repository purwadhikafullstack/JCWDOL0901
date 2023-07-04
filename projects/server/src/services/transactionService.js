const { sequelize } = require("../models/index.js");
const {
	startCreateTransactionErrorHandler,
	startFindErrorHandler,
	startCreateErrorHandler,
} = require("../errors/serviceError.js");
const {
	createTransactionQuery,
	readUserTransactionQuery,
	updateTransactionStatusQuery,
} = require("../queries/Transactions.js");
const { createTransactionDetailsQuery } = require("../queries/Transaction_details.js");
const { createLogisticsQuery } = require("../queries/Logistics.js");
const { deleteCartsQueryOnOrder } = require("../queries/Carts.js");
const { updateUsedUserVouchersQuery } = require("../queries/User_vouchers.js");
const { decrementInventoriesStockQuery } = require("../queries/Inventories.js");
const { createProofQuery } = require("../queries/Proofs.js");

const userTransactionGeneration = async (payload, transaction) => {
	const Transaction = await createTransactionQuery(payload.transaction, transaction);
	await createTransactionDetailsQuery(Transaction, payload.transaction_detail, transaction);
	await createLogisticsQuery(Transaction, payload.logistic, transaction);
	await decrementInventoriesStockQuery(payload.transaction_detail, transaction);
	await deleteCartsQueryOnOrder(payload.user, transaction);

	if (payload.voucher.id) await updateUsedUserVouchersQuery(payload.user, payload.voucher, transaction);
};

module.exports = {
	startCreateTransaction: async (payload) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				await userTransactionGeneration(payload, transaction);

				await transaction.commit();
				return await resolve("Order Created!");
			} catch (error) {
				await transaction.rollback();
				return await reject(await startCreateTransactionErrorHandler(error));
			}
		});
	},
	startFindUserTransaction: async (transaction_id, user_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Transaction = await readUserTransactionQuery(transaction_id);

				if (Transaction.user_id !== user_id) throw "ERR_UNAUTHORIZED";

				return await resolve(Transaction);
			} catch (error) {
				return await reject(await startFindErrorHandler(error));
			}
		});
	},
	startCreateProof: async (transaction_id, path) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				await createProofQuery(transaction_id, path, transaction);
				await updateTransactionStatusQuery(2, transaction_id, transaction);

				await transaction.commit();
				return await resolve("Success!");
			} catch (error) {
				await transaction.rollback();
				return await reject(await startCreateErrorHandler(error));
			}
		});
	},
};
