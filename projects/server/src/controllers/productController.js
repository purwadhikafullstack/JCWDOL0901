const {
	startFindProductsRecommendation,
	startFindRelatedProducts,
	startFindProductDetail,
	startFindProducts,
} = require("../services/productService.js");

const getProductsRecommendation = async (request, response) => {
	const { filter } = request.query;
	await startFindProductsRecommendation(filter)
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

const getRelatedProducts = async (request, response) => {
	const { filter } = request.query;

	await startFindRelatedProducts(filter)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

const getProductDetail = async (request, response) => {
	await startFindProductDetail(request.params.inventory_id)
		.then((result) => {
			response.status(200).send(result);
		})
		.catch((error) => {
			response.status(error.code).send(error.message);
		});
};

module.exports = { getProductsRecommendation, getRelatedProducts, getProductDetail, getProducts };