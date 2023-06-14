const {
	getAdminQueryFilter,
	getAdminQueryOrder,
	getInventoryPromotionQueryFilter,
	getInventoryPromotionQueryOrder,
	getInventoriesQueryFilter,
	getInventoriesQueryOrder,
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

module.exports = {
	getInventoriesQuerySanitizer,
	getAdminsQuerySanitizer,
	postNearestBranchBodySanitizer,
	getInventoryPromotionQuerySanitizer,
	postInventoryPromotionBodySanitizer,
	patchInventoryPromotionBodySanitizer,
};
