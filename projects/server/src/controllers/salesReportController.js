const { startFindSalesReportByProduct, startFindSalesReportByTransaction, startFindSalesReportByUser } = require("../services/salesReportService");


const getSalesReportByProduct = async (request, response) => {
	const { transaction_id } = request.params;
	const { id } = request.userData;
	await startFindSalesReportByProduct(transaction_id, id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};
const getSalesReportByTransaction = async (request, response) => {
	const { transaction_id } = request.params;
	const { id } = request.userData;
	await startFindSalesReportByTransaction(transaction_id, id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};
const getSalesReportByUser = async (request, response) => {
	const { transaction_id } = request.params;
	const { id } = request.userData;
	await startFindSalesReportByUser(transaction_id, id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = {
	getSalesReportByProduct,
	getSalesReportByTransaction,
	getSalesReportByUser,
};
