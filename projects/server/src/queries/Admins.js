const { Admins, Branches } = require("../models/index.js");
const { getHashPassword } = require("../utils/bcrypt.js");

const readAdminQuery = async (filter, order) => {
	return await Admins.findAll({
		include: [
			{
				model: Branches,
				where: filter?.branch,
			},
		],
		order: [...order?.branch],
	});
};

const createAdminQuery = async (body, transaction) => {
	const { email, password } = body;
	const hashPassword = await getHashPassword(password);
	return await Admins.create(
		{ email, password: hashPassword },
		{ transaction }
	);
};

module.exports = { readAdminQuery, createAdminQuery };
