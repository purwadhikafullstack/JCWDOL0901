const { request } = require("express");
const {
	getAdminQueryFilter,
	getAdminQueryOrder,
	getInventoryPromotionQueryFilter,
	getInventoryPromotionQueryOrder,
	getCategoryQueryFilter,
	getCategoryQueryOrder,
	getInventoriesQueryFilter,
	getInventoriesQueryOrder,
	getRelatedProductsFilter,
	getProductsRecommendationFilter,
} = require("../helpers/queryHelper");
const { getTransactionPayload, getTransactionDetailPayload } = require("../helpers/bodyHelper");

const getAdminsQuerySanitizer = async (request, response, next) => {
	const sanitizedQuery = {
		filter: await getAdminQueryFilter(request.query),
		order: await getAdminQueryOrder(request.query),
		page: request.query.page,
	};

	request.query = sanitizedQuery;

	next();
};

const postNearestBranchBodySanitizer = async (request, response, next) => {
	const { latitude, longitude } = request.body;
	delete request.body;

	request.geolocation = { latitude, longitude };

	next();
};

const getInventoryPromotionQuerySanitizer = async (request, response, next) => {
	const sanitizedQuery = {
		name: request.query.name || "",
		filter: await getInventoryPromotionQueryFilter(request.query),
		order: await getInventoryPromotionQueryOrder(request.query),
		page: request.query.page,
	};

	request.query = sanitizedQuery;

	next();
};

const getInventoriesQuerySanitizer = async (request, response, next) => {
	const sanitizedQuery = {
		name: request.query.name || "",
		filter: await getInventoriesQueryFilter(request.query),
		order: await getInventoriesQueryOrder(request.query),
		page: request.query.page,
	};

	request.query = sanitizedQuery;

	next();
};

const getProductsRecommendationQuerySanitizer = async (request, response, next) => {
	const sanitizedQuery = {
		filter: await getProductsRecommendationFilter(request.query),
	};

	request.query = sanitizedQuery;

	next();
};

const getRelatedProductsQuerySanitizer = async (request, response, next) => {
	const sanitizedQuery = {
		filter: await getRelatedProductsFilter(request.query),
	};

	request.query = sanitizedQuery;

	next();
};

const postInventoryPromotionBodySanitizer = async (request, response, next) => {
	const { promotion_id, value, start_at, expired_at, inventory_id } = request.body;
	delete request.body;

	request.payload = { promotion_id, value, start_at, expired_at, inventory_id };

	next();
};

const patchInventoryPromotionBodySanitizer = async (request, response, next) => {
	const { promotion_id, value, start_at, expired_at, inventory_id, id } = request.body;
	delete request.body;

	request.payload = { promotion_id, value, start_at, expired_at, inventory_id };
	request.id = id;

	next();
};

const getCategorySanitizer = async (request, response, next) => {
	const sanitizedQuery = {
		filter: await getCategoryQueryFilter(request.query),
		order: await getCategoryQueryOrder(request.query),
		page: request.query.page,
		itemPerPage: request.query.itemPerPage,
	};

	request.query = sanitizedQuery;

	next();
};

const postTransactionBodySanitizer = async (request, response, next) => {
	const payload = {
		Transaction: await getTransactionPayload(request.body, request.userData),
		Transaction_detail: await getTransactionDetailPayload(request.body),
		Logistic: true,
	};

	request.payload = payload;

	delete request.body;

	next();
};

const postRajaOngkirCostBodySanitizer = async (request, response, next) => {
	const { branch_city_id, city_id, weight, courier } = request.body;

	const payload = {
		branch_city_id,
		city_id,
		weight,
		courier,
	};

	request.payload = payload;

	delete request.body;

	next();
};

module.exports = {
	getInventoriesQuerySanitizer,
	getAdminsQuerySanitizer,
	postNearestBranchBodySanitizer,
	getInventoryPromotionQuerySanitizer,
	postInventoryPromotionBodySanitizer,
	patchInventoryPromotionBodySanitizer,
	getCategorySanitizer,
	getRelatedProductsQuerySanitizer,
	getProductsRecommendationQuerySanitizer,
	postTransactionBodySanitizer,
	postRajaOngkirCostBodySanitizer,
};
