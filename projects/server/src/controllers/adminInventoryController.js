const { startFindInventories } = require("../services/adminInventoryService.js");

const getInventories = async (request, response) => {
	await startFindInventories(request.branchData.id)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getInventories };
