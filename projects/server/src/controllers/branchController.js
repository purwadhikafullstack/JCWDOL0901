const { startFindNearestBranch } = require("../services/branchService");

const postNearestBranch = async (request, response) => {
	await startFindNearestBranch(request.geolocation)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { postNearestBranch };
