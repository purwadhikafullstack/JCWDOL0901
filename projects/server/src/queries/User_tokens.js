const { User_tokens, sequelize } = require("../models/index.js");
const { Op } = require("sequelize");

const { generateVerificationToken } = require("../helpers/userTokenHelper.js");

const createVerificationTokenQuery = async (body, transaction) => {
	const { email, id } = body;
	const token = await generateVerificationToken(email, id);

	return await User_tokens.create(
		{ user_id: id, token, action: "verify_account" },
		{ transaction }
	);
};

const readUserTokensQuery = async (token, action) => {
	const User_token = await User_tokens.findOne({
		where: { [Op.and]: [{ token, action }] },
	});

	if (!User_token) throw "INVALID_TOKEN";

	return User_token;
};

module.exports = { createVerificationTokenQuery, readUserTokensQuery };
