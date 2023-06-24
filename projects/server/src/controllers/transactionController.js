const {
	startCreateTransaction,
	startFindUserTransaction,
	startCreateProof,
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

	await startCreateProof(transaction_id, file)
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

module.exports = { postTransaction, postTransactionProof, getUserTransaction };
