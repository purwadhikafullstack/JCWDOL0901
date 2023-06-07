const { startFindErrorHandler } = require("../errors/serviceError.js");
const { readAdminTransasctionsQuery } = require("../queries/Transactions.js");

module.exports = {
	startFindAdminTransactions: async (from, to, status, branch) => {
		return new Promise(async (resolve, reject) => {
			try {
				const adminTransactionsData = await readAdminTransasctionsQuery(
					from,
					to,
					status,
					branch
				);
				return resolve(adminTransactionsData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startGetAdminDashboardData: async (from, to, status, branch) => {
		return new Promise(async (resolve, reject) => {
			try {
				const adminTransactionsData = await readAdminTransasctionsQuery(
					from,
					to,
					status,
					branch
				);
				const totalGrossIncome = adminTransactionsData.reduce(
					(total, current) => total + current.amount,
					0
				);
				const grossIncomeData = adminTransactionsData.map(cur => {
					return cur.amount;
				});

				const arr = new Array(7).fill(0);

				//[0, 0, 0, 0, 0, 0, 0]
				//"2023-05-24T00:00:00.000Z",

				const DashboardData = {
					total_gross_income: totalGrossIncome,
					gross_income_data: grossIncomeData,
				};
				return resolve(DashboardData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
