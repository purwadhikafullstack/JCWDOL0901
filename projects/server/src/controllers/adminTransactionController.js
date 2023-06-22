const {
	startGetAdminDashboardData,
	startFindAdminTransactions,
	startGetAdminAllTimeData,
} = require("../services/adminTransactionService");

const getAdminTransactions = async (request, response) => {
	const branch_id = request.branchData.id;
	await startFindAdminTransactions(request.query, branch_id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const getAdminDashboardData = async (request, response) => {
	const { from, to, status } = request.query;
	const branch = request.branchData.id;
	await startGetAdminDashboardData(from, to, status, branch)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const getAdminAllTimeData = async (request, response) => {
	const { status } = request.query;
	const branch = request.branchData.id;
	await startGetAdminAllTimeData(status, branch)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getAdminTransactions, getAdminDashboardData, getAdminAllTimeData };
