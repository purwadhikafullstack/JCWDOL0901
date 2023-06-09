const { startFindNearestBranch, startFindBranches } = require("../services/branchService");

const postNearestBranch = async (request, response) => {
	await startFindNearestBranch(request.geolocation)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

const getBranches = async (request, response) => {
	await startFindBranches()
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};
module.exports = { postNearestBranch, getBranches };
