const { Admins, Branches } = require("../models/index.js");

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
	console.log(body);
	return await Admins.create({ email, password }, { transaction });
};

module.exports = { readAdminQuery, createAdminQuery };
