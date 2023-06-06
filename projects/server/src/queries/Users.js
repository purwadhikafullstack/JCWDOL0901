const { Users } = require("../models/index.js");
const { generateReferralCode } = require("../helpers/referralCodeHelper.js");

const createUserQuery = async (body, transaction) => {
	const { email, username, phone, password, referrer } = body;

	const newUserData = await Users.create(
		{ email, username, phone, password, referrer },
		{ transaction }
	);

	const referral_code = await generateReferralCode(
		newUserData.username,
		newUserData.id
	);

	return await newUserData.update({ referral_code }, { transaction });
};

module.exports = { createUserQuery };
