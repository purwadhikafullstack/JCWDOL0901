const {
	startCreateTransaction,
	startFindUserTransaction,
	startCreateProof,
	startFindUserTransactions,
} = require("../services/transactionService.js");

const postTransaction = async (request, response) => {
	await startCreateTransaction(request.payload)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const postTransactionProof = async (request, response) => {
	const { file } = request;
	const { transaction_id } = request.body;
	const path = file.destination + file.filename;

	await startCreateProof(transaction_id, path)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const getUserTransaction = async (request, response) => {
	const { transaction_id } = request.params;
	const { id } = request.userData;

	await startFindUserTransaction(transaction_id, id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error);
		});
};

const getUserTransactions = async (request, response) => {
	const { id } = request.userData;
	await startFindUserTransactions(id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error);
		});
};

module.exports = { postTransaction, postTransactionProof, getUserTransaction, getUserTransactions };
