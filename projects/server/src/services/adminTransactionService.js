const { startFindErrorHandler } = require("../errors/serviceError.js");
const { readAdminTransasctionsQuery } = require("../queries/Transactions.js");

module.exports = {
	startFindAdminTransactions: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const adminTransactionsData = await readAdminTransasctionsQuery();
				return resolve(adminTransactionsData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startGetAdminDashboardData: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				const adminTransactionsData = await readAdminTransasctionsQuery();
				const totalGrossIncome = adminTransactionsData.reduce(
					(total, current) => total + current.amount,
					0
				);
				const DashboardData = {
					total_gross_income: totalGrossIncome,
				};
				return resolve(DashboardData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
