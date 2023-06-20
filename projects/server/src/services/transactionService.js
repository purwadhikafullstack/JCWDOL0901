const { sequelize } = require("../models/index.js");
const { startCreateTransactionErrorHandler } = require("../errors/serviceError.js");
const { createTransactionQuery } = require("../queries/Transactions.js");
const { createTransactionDetailsQuery } = require("../queries/Transaction_details.js");
const { createLogisticsQuery } = require("../queries/Logistics.js");
const { deleteCartsQueryOnOrder } = require("../queries/Carts.js");
const { updateUsedUserVouchersQuery } = require("../queries/User_vouchers.js");

const userTransactionGeneration = async (payload, transaction) => {
	const Transaction = await createTransactionQuery(payload.transaction, transaction);
	await createTransactionDetailsQuery(Transaction, payload.transaction_detail, transaction);
	await createLogisticsQuery(Transaction, payload.logistic, transaction);
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
				console.log(error);
				await transaction.rollback();
				return await reject(await startCreateTransactionErrorHandler(error));
			}
		});
	},
};
