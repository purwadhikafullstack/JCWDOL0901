const { startFindErrorHandler } = require("../errors/serviceError.js");
const { sequelize } = require("../models/index.js");
const moment = require("moment");
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
	startFindSalesReportByTransaction: async (branch_id, from, to) => {
		return new Promise(async (resolve, reject) => {
			try {
				from = from ? moment(from) : moment(0);
				to = to ? moment(to).add(1, "d") : moment();
				console.log("from services: ", from);
				console.log("to services: ", to);
				const TransactionSalesReport = await readTransactionSalesReportQuery(branch_id, from, to);
				return resolve(TransactionSalesReport);
			} catch (error) {
				console.log("error msg:", error);
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindSalesReportByUser: async (branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const UserSalesReport = await readUserSalesReportQuery(branch_id);
				return resolve(UserSalesReport);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
