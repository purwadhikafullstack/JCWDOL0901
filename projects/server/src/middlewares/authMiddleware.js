const { Users, Branches } = require("../models/index.js");
const { forbiddenErrorHandler } = require("../errors/serviceError.js");
const { verifyJWToken } = require("../utils/jsonwebtoken.js");
const { isUserErrorHandler } = require("../errors/middlewareError.js");

const getReferrerId = async (request, response, next) => {
	const referrer = await Users.findOne({
		where: { referral_code: request.body.reference },
	});

	request.body.referrer = null || referrer?.id;

	delete request.body.reference;

	next();
};

const isSuperAdmin = async (request, response, next) => {
	try {
		if (!request.adminData.super) throw error;
		next();
	} catch (error) {
		response.status(403).send("Not a superadmin!");
	}
};

const isAdmin = async (request, response, next) => {
	try {
		if (!request.headers.authorization) throw "Missing token!";
		const token = await verifyJWToken(request.headers.authorization, process.env.JWT_ADMIN_SECRET_KEY);
		request.adminData = token;

		next();
	} catch (error) {
		response.status(403).send({ message: error });
	}
};

const isUser = async (request, response, next) => {
	try {
		if (!request.headers.authorization) throw { name: "EmptyTokenError" };
		const token = await verifyJWToken(request.headers.authorization, process.env.JWT_USER_SECRET_KEY);
		request.userData = token;

		next();
	} catch (error) {
		await isUserErrorHandler(response, error);
	}
};

const isVerifiedUser = async (request, response, next) => {
	const verified = await request.userData.verified;

	if (!verified) return response.status(403).send("Please Verify Your Account First.");

	next();
};

const getBranchId = async (request, response, next) => {
	try {
		if (request.adminData.super) {
			request.branchData = { id: 0 };
		} else if (request.adminData.id) {
			const branchData = await Branches.findOne({ where: { admin_id: request.adminData.id } });
			request.branchData = branchData;
		}
		next();
	} catch (error) {
		response.status(500).send("Internal Server Error");
	}
};

module.exports = {
	getReferrerId,
	isSuperAdmin,
	isAdmin,
	getBranchId,
	isUser,
	isVerifiedUser,
};
