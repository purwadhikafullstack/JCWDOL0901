const { User_tokens } = require("../models/index.js");

const { generateVerificationToken } = require("../helpers/userTokenHelper.js");

const createVerificationTokenQuery = async (body, transaction) => {
	const { email, id } = body;
	const token = await generateVerificationToken(email, id);

	return await User_tokens.create(
		{ user_id: id, token, action: "verify" },
		{ transaction }
	);
};

module.exports = { createVerificationTokenQuery };
