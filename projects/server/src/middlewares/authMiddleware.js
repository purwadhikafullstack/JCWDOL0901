const { Users } = require("../models/index.js");
const {
	getAdminQueryFilter,
	getAdminQueryOrder,
} = require("../helpers/queryHelper");

const getReferrerId = async (request, response, next) => {
	const referrer = await Users.findOne({
		where: { referral_code: request.body.reference },
	});

	request.body.referrer = null || referrer.id;

	delete request.body.reference;

	next();
};

const getAdminsQueryParamsSanitizer = async (request, response, next) => {
	const sanitizedQuery = {
		filter: await getAdminQueryFilter(request.query),
		order: await getAdminQueryOrder(request.query),
		page: request.query.page,
	};

	request.query = sanitizedQuery;

	next();
};

module.exports = { getReferrerId, getAdminsQueryParamsSanitizer };
