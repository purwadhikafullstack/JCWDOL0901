const { Profiles } = require("../models/index.js");

const createProfileQuery = async (body, user_id, transaction) => {
	const { name } = body;
	return await Profiles.create({ name, user_id }, { transaction });
};

module.exports = { createProfileQuery };
