const { startFindErrorHandler } = require("../errors/serviceError.js");
const { sequelize } = require("../models/index.js");
const {
	readProductSalesReportQuery,
	readTransactionSalesReportQuery,
	readUserSalesReportQuery,
} = require("../queries/SalesReport.js");

module.exports = {
	startFindSalesReportByProduct: async (branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const ProductSalesReport = await readProductSalesReportQuery(branch_id);
				return resolve(ProductSalesReport);
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
