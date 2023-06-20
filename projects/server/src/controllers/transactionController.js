const { startCreateTransaction } = require("../services/transactionService.js");

const postTransaction = async (request, response) => {
	await startCreateTransaction(request.payload)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { postTransaction };
