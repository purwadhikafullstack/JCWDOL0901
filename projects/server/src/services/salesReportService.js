const { sequelize } = require("../models/index.js");
const {
	readProductSalesReportQuery,
	readTransactionSalesReportQuery,
	readUserSalesReportQuery,
} = require("../queries/SalesReport.js");

module.exports = {
	startFindSalesReportByProduct: async (query, branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const adminTransactionsData = await readProductSalesReportQuery(query, branch_id);
				return resolve(adminTransactionsData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindSalesReportByTransaction: async (query, branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const adminTransactionsData = await readTransactionSalesReportQuery(query, branch_id);
				return resolve(adminTransactionsData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindSalesReportByUser: async (query, branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const adminTransactionsData = await readUserSalesReportQuery(query, branch_id);
				return resolve(adminTransactionsData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
