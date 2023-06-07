const { startFindErrorHandler } = require("../errors/serviceError.js");
const { readAdminTransactionsQuery } = require("../queries/Transactions.js");
const moment = require("moment");

module.exports = {
	startFindAdminTransactions: async (from, to, status, branch) => {
		return new Promise(async (resolve, reject) => {
			try {
				from = from ? new Date(from) : new Date(0);
				to = to ? new Date(to) : new Date();
				const adminTransactionsData = await readAdminTransactionsQuery(
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
				from = from ? new Date(from) : moment().subtract(7, "days");
				to = to ? new Date(to) : new Date();

				const adminTransactionsData = await readAdminTransactionsQuery(
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

				const diffInDays = moment(to).diff(moment(from), "days");
				console.log(diffInDays);
				const dateArray = new Array(diffInDays)
					.fill(0)
					.map((cur, index, arr) =>
						moment().subtract(arr.length - 1 - index, "days")
					);
				console.log(dateArray);
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
