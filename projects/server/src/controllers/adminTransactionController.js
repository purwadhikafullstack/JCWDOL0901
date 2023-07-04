const {
	startGetAdminDashboardData,
	startFindAdminTransactions,
	startGetAdminAllTimeData,
	startSendUserOrder,
	startCancelUserOrder,
	startConfirmUserOrder,
	startRejectUserOrder,
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

const sendUserOrder = async (request, response) => {
	const { transaction_id } = request.params;
	const branch_id = request.branchData.id;
	await startSendUserOrder(transaction_id, branch_id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const cancelUserOrder = async (request, response) => {
	const { transaction_id } = request.params;
	const branch_id = request.branchData.id;
	await startCancelUserOrder(transaction_id, branch_id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const confirmUserOrder = async (request, response) => {
	const { transaction_id } = request.params;
	const branch_id = request.branchData.id;
	await startConfirmUserOrder(transaction_id, branch_id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const rejectUserOrder = async (request, response) => {
	const { transaction_id } = request.params;
	const branch_id = request.branchData.id;
	await startRejectUserOrder(transaction_id, branch_id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = {
	getAdminTransactions,
	getAdminDashboardData,
	getAdminAllTimeData,
	sendUserOrder,
	cancelUserOrder,
	confirmUserOrder,
	rejectUserOrder,
};
