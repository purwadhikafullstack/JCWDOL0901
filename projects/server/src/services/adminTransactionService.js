const { startFindErrorHandler } = require("../errors/serviceError.js");
const { readAdminTransactionsQuery, readBranchAdminTransactionsQuery } = require("../queries/Transactions.js");
const moment = require("moment");

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
	const diffInDays = moment(to).diff(moment(from), "days") + 1;
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
	startGetAdminDashboardData: async (from, to, status, branch) => {
		return new Promise(async (resolve, reject) => {
			try {
				from = from ? moment(from) : moment(new Date().toISOString().split("T")[0]).subtract(6, "days");
				to = to ? moment(to) : moment(new Date().toISOString().split("T")[0]);

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
				const to = moment(new Date().toISOString().split("T")[0]);
				const AllTimeData = getAllTimeData(from, to, status, branch);
				return resolve(AllTimeData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
};
