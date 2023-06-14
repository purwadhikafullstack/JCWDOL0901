const {
	getAdminQueryFilter,
	getAdminQueryOrder,
	getInventoryPromotionQueryFilter,
	getInventoryPromotionQueryOrder,
	getCategoryQueryFilter,
} = require("../helpers/queryHelper");

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
		filter: await getInventoryPromotionQueryFilter(request.query),
		order: await getInventoryPromotionQueryOrder(request.query),
		page: request.query.page,
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
		// order: await getInventoryPromotionQueryOrder(request.query),
		page: request.query.page,
		itemPerPage: request.query.itemPerPage,
	};

	request.query = sanitizedQuery;

	next();
};

module.exports = {
	getAdminsQuerySanitizer,
	postNearestBranchBodySanitizer,
	getInventoryPromotionQuerySanitizer,
	postInventoryPromotionBodySanitizer,
	patchInventoryPromotionBodySanitizer,
	getCategorySanitizer,
};
