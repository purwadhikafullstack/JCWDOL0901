const { sequelize, Admins } = require("../models/index.js");

const readAdminQuery = async (filter, order) => {
	return await Admins.findAll({
		include: [
			{
				model: sequelize.models.Branches,
				where: filter?.branch,
			},
		],
		order: [...order?.branch],
	});
};

module.exports = { readAdminQuery };
