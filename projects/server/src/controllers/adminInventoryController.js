const { startFindInventories } = require("../services/adminInventoryService.js");

const getInventories = async (request, response) => {
	const { name, filter, order, page } = request.query;
	const { branchData } = request;

	await startFindInventories(branchData.id, name, filter, order, page)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getInventories };
