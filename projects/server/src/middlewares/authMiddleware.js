const { Users } = require("../models/index.js");

const getReferrerId = async (request, response, next) => {
	const referrer = await Users.findOne({
		where: { referral_code: request.body.reference },
	});

	request.body.referrer = null || referrer.id;

	delete request.body.reference;

	next();
};

module.exports = { getReferrerId };
