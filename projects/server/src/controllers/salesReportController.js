const {
	startFindSalesReportByProduct,
	startFindSalesReportByTransaction,
	startFindSalesReportByUser,
} = require("../services/salesReportService");

const getSalesReportByProduct = async (request, response) => {
	const { start_after, end_before } = request.query;
	const branch_id = request.branchData.id;
	await startFindSalesReportByProduct(branch_id, start_after, end_before)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};
const getSalesReportByTransaction = async (request, response) => {
	const { start_after, end_before } = request.query;
	const branch_id = request.branchData.id;
	await startFindSalesReportByTransaction(branch_id, start_after, end_before)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};
const getSalesReportByUser = async (request, response) => {
	const { start_after, end_before } = request.query;
	const branch_id = request.branchData.id;
	await startFindSalesReportByUser(branch_id, start_after, end_before)
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
