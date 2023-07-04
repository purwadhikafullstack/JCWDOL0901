const {
	startFindInventories,
	startEditInventories,
	startFindStockChanges,
} = require("../services/adminInventoryService.js");

const getInventories = async (request, response) => {
	const { name, filter, order, page } = request.query;
	const { branchData } = request;

	await startFindInventories(branchData.id, name, filter, order, page)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const patchInventories = async (request, response) => {
	const { stock, description } = request.body;

	await startEditInventories(request.params.inventory_id, stock, description)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const getStockChanges = async (request, response) => {
	const { branchData, query } = request;

	await startFindStockChanges(query, branchData.id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getInventories, patchInventories, getStockChanges };
