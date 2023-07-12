const { Admins, Branches, sequelize } = require("../models/index.js");
const { getHashPassword } = require("../utils/bcrypt.js");
const { generateJWToken } = require("../utils/jsonwebtoken.js");

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
	return await Admins.create({ email, password: hashPassword }, { transaction });
};

const adminAuthenticationQuery = async (body, Name) => {
	return await sequelize.models[Name].findOne({
		where: { email: body.email },
	});
};

module.exports = {
	readAdminQuery,
	createAdminQuery,
	adminAuthenticationQuery,
};
