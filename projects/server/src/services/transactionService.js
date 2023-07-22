const { sequelize } = require("../models/index.js");
const {
	startCreateTransactionErrorHandler,
	startFindErrorHandler,
	startCreateErrorHandler,
	startUpdateErrorHandler,
} = require("../errors/serviceError.js");
const {
	createTransactionQuery,
	readUserTransactionQuery,
	updateTransactionStatusQuery,
	readUserTransactionsQuery,
} = require("../queries/Transactions.js");
const { createTransactionDetailsQuery } = require("../queries/Transaction_details.js");
const { createLogisticsQuery } = require("../queries/Logistics.js");
const { deleteCartsQueryOnOrder } = require("../queries/Carts.js");
const { updateUsedUserVouchersQuery } = require("../queries/User_vouchers.js");
const { decrementInventoriesStockQuery, incrementInventoriesStockQuery } = require("../queries/Inventories.js");
const { createProofQuery } = require("../queries/Proofs.js");

const userTransactionGeneration = async (payload, transaction) => {
	const Transaction = await createTransactionQuery(payload.transaction, transaction);
	await createTransactionDetailsQuery(Transaction, payload.transaction_detail, transaction);
	await createLogisticsQuery(Transaction, payload.logistic, transaction);
	await decrementInventoriesStockQuery(payload.transaction_detail, transaction);
	await deleteCartsQueryOnOrder(payload.user, transaction);

	if (payload.voucher.id) await updateUsedUserVouchersQuery(payload.voucher.user_voucher_id, transaction);
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
	startFindUserTransactions: async (user_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Transaction = await readUserTransactionsQuery(user_id);
				return await resolve(Transaction);
			} catch (error) {
				return await reject(await startFindErrorHandler(error));
			}
		});
	},
	startCancelUserOrderByUser: async (transaction_id, user_id) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const Transaction = await readUserTransactionQuery(transaction_id);
				if (Transaction.user_id !== user_id) throw "ERR_UNAUTHORIZED";
				if (Transaction.status_id > 2) throw "ERR_UNAUTHORIZED";
				await updateTransactionStatusQuery(6, transaction_id, transaction);
				await incrementInventoriesStockQuery(Transaction.Transaction_details, transaction);
				await transaction.commit();
				return await resolve("Success update transaction status!");
			} catch (error) {
				await transaction.rollback();
				return await reject(await startUpdateErrorHandler(error));
			}
		});
	},
	startConfirmUserOrderByUser: async (transaction_id, user_id) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const Transaction = await readUserTransactionQuery(transaction_id);
				if (Transaction.user_id !== user_id) throw "ERR_UNAUTHORIZED";
				if (Transaction.status_id !== 4) throw "ERR_UNAUTHORIZED";
				await updateTransactionStatusQuery(5, transaction_id, transaction);
				await transaction.commit();
				return await resolve("Success update transaction status!");
			} catch (error) {
				await transaction.rollback();
				return await reject(await startUpdateErrorHandler(error));
			}
		});
	},
	startConfirmUserOrderByUser: async (transaction_id, user_id) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const Transaction = await readUserTransactionQuery(transaction_id);
				if (Transaction.user_id !== user_id) throw "ERR_UNAUTHORIZED";
				if (Transaction.status_id !== 4) throw "ERR_UNAUTHORIZED";
				await updateTransactionStatusQuery(5, transaction_id, transaction);
				await transaction.commit();
				return await resolve("Success update transaction status!");
			} catch (error) {
				await transaction.rollback();
				return await reject(await startUpdateErrorHandler(error));
			}
		});
	},
};
