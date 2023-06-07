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
				to = to ? new Date(to) : new Date(new Date().toLocaleDateString());

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
				const rawData = adminTransactionsData.map(cur => {
					return {
						label: moment(cur.created_at).format("DD/MM/YYYY"),
						amount: cur.amount,
					};
				});

				const diffInDays = moment(to).diff(moment(from), "days");
				console.log(diffInDays);

				const labels = new Array(diffInDays + 1)
					.fill(0)
					.map((cur, index, arr) =>
						moment()
							.subtract(arr.length - 1 - index, "days")
							.format("DD/MM/YYYY")
					);

				const grossIncomeData = labels.map(label =>
					rawData.reduce(
						(sum, raw) =>
							label === raw.label ? (sum += raw.amount) : (sum += 0),
						0
					)
				);

				const DashboardData = {
					rawData,
					totalGrossIncome,
					grossIncomeData,
					labels,
				};
				return resolve(DashboardData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
