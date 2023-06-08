const { Users, Branches } = require("../models/index.js");
const { getAdminQueryFilter, getAdminQueryOrder } = require("../helpers/queryHelper");
const { forbiddenErrorHandler } = require("../errors/serviceError.js");

const getReferrerId = async (request, response, next) => {
	const referrer = await Users.findOne({
		where: { referral_code: request.body.reference },
	});

	request.body.referrer = null || referrer?.id;

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

const isSuperAdmin = async (request, response, next) => {
	try {
		if (!request.headers.authorization) throw error;
		// let token = request.headers.authorization.split(" ")[1];
		// const adminData = jwt.verify(token, process.env.JWT_ADMIN_SECRET_KEY);
		const adminData = { super: 1, id: 1 };
		if (!adminData.super) throw error;
		next();
	} catch (error) {
		error = await forbiddenErrorHandler();
		response.status(error.code).send(error.message);
	}
};

const getBranchId = async (request, response, next) => {
	try {
		if (!request.headers.authorization) throw error;
		// let token = request.headers.authorization.split(" ")[1];
		// const adminData = jwt.verify(token, process.env.JWT_ADMIN_SECRET_KEY);
		const adminData = { super: 1, id: 3 };
		if (adminData.super) request.query.branch = 0;
		else if (adminData.id) {
			const branchData = await Branches.findOne({
				where: { admin_id: adminData.id },
			});
			request.query.branch = branchData.id;
		} else throw error;
		next();
	} catch (error) {
		error = await forbiddenErrorHandler();
		response.status(error.code).send(error.message);
	}
};

module.exports = { getReferrerId, getAdminsQueryParamsSanitizer, isSuperAdmin, getBranchId };
