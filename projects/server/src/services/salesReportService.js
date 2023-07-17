const { startFindErrorHandler } = require("../errors/serviceError.js");
const { sequelize } = require("../models/index.js");
const moment = require("moment");
const {
	readProductSalesReportQuery,
	readTransactionSalesReportQuery,
	readUserSalesReportQuery,
} = require("../queries/SalesReport.js");

module.exports = {
	startFindSalesReportByProduct: async (branch_id, from, to) => {
		return new Promise(async (resolve, reject) => {
			try {
				from = from ? moment(from) : moment(0);
				to = to ? moment(to).add(1, "d") : moment();
				const ProductSalesReport = await readProductSalesReportQuery(branch_id, from, to);
				return resolve(ProductSalesReport);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindSalesReportByTransaction: async (branch_id, from, to, page, item_per_page) => {
		return new Promise(async (resolve, reject) => {
			try {
				from = from ? moment(from) : moment(0);
				to = to ? moment(to).add(1, "d") : moment();
				const TransactionSalesReport = await readTransactionSalesReportQuery(branch_id, from, to, page, item_per_page);
				return resolve(TransactionSalesReport);
			} catch (error) {
				console.log("error msg:", error);
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindSalesReportByUser: async (branch_id, from, to, page, item_per_page) => {
		return new Promise(async (resolve, reject) => {
			try {
				from = from ? moment(from) : moment(0);
				to = to ? moment(to).add(1, "d") : moment();
				const UserSalesReport = await readUserSalesReportQuery(branch_id, from, to, page, item_per_page);
				return resolve(UserSalesReport);
			} catch (error) {
				console.log("error:", error)
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
