const {
	startGetAdminDashboardData,
	startFindAdminTransactions,
} = require("../services/adminTransactionService");

const getAdminTransactions = async (request, response) => {
	await startFindAdminTransactions()
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

const getAdminDashboardData = async (request, response) => {
	await startGetAdminDashboardData()
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getAdminTransactions, getAdminDashboardData };
