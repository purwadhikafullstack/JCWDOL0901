const { startFindProductsRecommendation } = require("../services/productService.js");

const getProductsRecommendation = async (request, response) => {
	await startFindProductsRecommendation(request.query.branch_id)
		.then(result => {
			response.status(200).send(result);
		})
		.catch(error => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getProductsRecommendation };