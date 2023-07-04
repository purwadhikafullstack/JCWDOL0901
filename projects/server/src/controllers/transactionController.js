<<<<<<< HEAD
const { startCreateTransaction } = require("../services/transactionService.js");
=======
const {
	startCreateTransaction,
	startFindUserTransaction,
	startCreateProof,
} = require("../services/transactionService.js");
>>>>>>> development

const postTransaction = async (request, response) => {
	await startCreateTransaction(request.payload)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

<<<<<<< HEAD
module.exports = { postTransaction };
=======
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

module.exports = { postTransaction, postTransactionProof, getUserTransaction };
>>>>>>> development
