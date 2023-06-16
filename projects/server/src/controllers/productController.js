const { startFindProductsRecommendation, startFindProducts } = require("../services/productService.js");

const getProductsRecommendation = async (request, response) => {
	await startFindProductsRecommendation(request.query.branch_id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const getProducts = async (request, response) => {
	const { filter, order, page, itemPerPage } = request.query;
	const { branch_id } = filter;
	await startFindProducts(filter, order, branch_id, page, Number(itemPerPage))
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getProductsRecommendation, getProducts };
