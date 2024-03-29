const { startUpdateErrorHandler } = require("../errors/serviceError.js");
const {
	readAdminTransactionsQuery,
	readBranchAdminTransactionsQuery,
	readUserTransactionQuery,
	updateTransactionStatusQuery,
	readBranchAdminTransactionDetailQuery,
} = require("../queries/Transactions.js");
const moment = require("moment");
const { sequelize } = require("../models/index.js");
const { incrementInventoriesStockQuery, readInventoryQuery } = require("../queries/Inventories.js");
const { createStockChangeQuery } = require("../queries/Stock_changes.js");
const { deleteProofQuery } = require("../queries/Proofs.js");

const getTotalGrossIncome = (data) => data.reduce((total, current) => total + current, 0);

const getTotalProductSold = (data) => data.reduce((total, current) => total + current, 0);

const getRawData = (data) =>
	data.map((cur) => {
		return {
			label: moment(cur.updated_at).format("DD/MM/YYYY"),
			amount: cur.amount,
			productSold: cur.Transaction_details.reduce((sum, cur) => sum + cur.quantity, 0),
		};
	});

const getLabels = (from, to) => {
	const diffInDays = moment(to)
		.add(1, "days")
		.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
		.diff(moment(from), "days");
	return new Array(diffInDays).fill(0).map((cur, index, arr) => moment(from).add(index, "days").format("DD/MM/YYYY"));
};

const getGrossIncomeData = (labels, rawData) => {
	return labels.map((label) =>
		rawData.reduce((sum, raw) => (label === raw.label ? (sum += raw.amount) : (sum += 0)), 0),
	);
};

const getProductSoldData = (labels, rawData) => {
	return labels.map((label) =>
		rawData.reduce((sum, raw) => (label === raw.label ? (sum += raw.productSold) : (sum += 0)), 0),
	);
};

const getDashboardData = async (from, to, status, branch) => {
	const adminTransactionsData = await readAdminTransactionsQuery(from, to, status, branch);
	const rawData = getRawData(adminTransactionsData);
	const labels = getLabels(from, to);
	const grossIncomeData = getGrossIncomeData(labels, rawData);
	const totalGrossIncome = getTotalGrossIncome(grossIncomeData);
	const productSoldData = getProductSoldData(labels, rawData);
	const totalProductSold = getTotalProductSold(productSoldData);
	return {
		rawData,
		totalGrossIncome,
		grossIncomeData,
		labels,
		productSoldData,
		totalProductSold,
	};
};
const getAllTimeData = async (from, to, status, branch) => {
	const adminTransactionsData = await readAdminTransactionsQuery(from, to, status, branch);
	const allTimeGrossIncome = adminTransactionsData.reduce((sum, cur) => sum + cur.amount, 0);
	const allTimeProductSold = adminTransactionsData.reduce(
		(sum, cur) => sum + cur.Transaction_details.reduce((sum, cur) => sum + cur.quantity, 0),
		0,
	);
	const totalBuyer = new Set(adminTransactionsData.map((cur) => cur.user_id)).size;
	return {
		allTimeGrossIncome,
		allTimeProductSold,
		totalBuyer,
	};
};

module.exports = {
	startFindAdminTransactions: async (query, branch_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const adminTransactionsData = await readBranchAdminTransactionsQuery(query, branch_id);
				return resolve(adminTransactionsData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startFindTransactionDetail: async (branch_id, transaction_id) => {
		return new Promise(async (resolve, reject) => {
			try {
				const adminTransactionDetail = await readBranchAdminTransactionDetailQuery(branch_id, transaction_id);
				return resolve(adminTransactionDetail);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startGetAdminDashboardData: async (from, to, status, branch) => {
		return new Promise(async (resolve, reject) => {
			try {
				from = from
					? moment(from)
					: moment(from).subtract(6, "days").set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
				to = to ? moment(to) : moment();

				const DashboardData = getDashboardData(from, to, status, branch);
				return resolve(DashboardData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startGetAdminAllTimeData: async (status, branch) => {
		return new Promise(async (resolve, reject) => {
			try {
				const from = moment(0);
				const to = moment();
				const AllTimeData = getAllTimeData(from, to, status, branch);
				return resolve(AllTimeData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startSendUserOrder: async (transaction_id, branch_id) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const Transaction = await readUserTransactionQuery(transaction_id);
				if (Transaction.branch_id !== branch_id) throw "ERR_UNAUTHORIZED";
				if (Transaction.status_id !== 3) throw "ERR_UNAUTHORIZED";
				await updateTransactionStatusQuery(4, transaction_id, transaction);

				for (const item of Transaction.Transaction_details) {
					const Inventory = await readInventoryQuery(item.inventory_id, transaction);
					const previousStock = Inventory.stock + item.quantity;
					const description = "Sales";
					await createStockChangeQuery(Inventory, previousStock, description, transaction);
				}

				await transaction.commit();
				return await resolve("Success update transaction status!");
			} catch (error) {
				await transaction.rollback();
				return await reject(await startUpdateErrorHandler(error));
			}
		});
	},
	startCancelUserOrder: async (transaction_id, branch_id) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const Transaction = await readUserTransactionQuery(transaction_id);
				if (Transaction.branch_id !== branch_id) throw "ERR_UNAUTHORIZED";
				if (Transaction.status_id > 3) throw "ERR_UNAUTHORIZED";
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
	startConfirmUserOrder: async (transaction_id, branch_id) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const Transaction = await readUserTransactionQuery(transaction_id);
				if (Transaction.branch_id !== branch_id) throw "ERR_UNAUTHORIZED";
				if (Transaction.status_id !== 2) throw "ERR_UNAUTHORIZED";
				await updateTransactionStatusQuery(3, transaction_id, transaction);
				await transaction.commit();
				return await resolve("Success update transaction status!");
			} catch (error) {
				await transaction.rollback();
				return await reject(await startUpdateErrorHandler(error));
			}
		});
	},
	startRejectUserOrder: async (transaction_id, branch_id) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const Transaction = await readUserTransactionQuery(transaction_id);
				if (Transaction.branch_id !== branch_id) throw "ERR_UNAUTHORIZED";
				if (Transaction.status_id !== 2) throw "ERR_UNAUTHORIZED";
				await updateTransactionStatusQuery(1, transaction_id, transaction);
				await deleteProofQuery(transaction_id, transaction);
				await transaction.commit();
				return await resolve("Success update transaction status!");
			} catch (error) {
				await transaction.rollback();
				return await reject(await startUpdateErrorHandler(error));
			}
		});
	},
};
