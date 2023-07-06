const { Users, Profiles, sequelize } = require("../models/index.js");
const { Op } = require("sequelize");
const { generateReferralCode } = require("../helpers/referralCodeHelper.js");
const { generateJWToken } = require("../utils/jsonwebtoken.js");

const createUserQuery = async (body, transaction) => {
	const { email, username, phone, password, referrer } = body;

	const newUserData = await Users.create({ email, username, phone, password, referrer }, { transaction });

	const referral_code = await generateReferralCode(newUserData.username, newUserData.id);

	return await newUserData.update({ referral_code }, { transaction });
};

const updateUserQuery = async (data, query, transaction) => {
	return await Users.update({ data }, { where: { ...query }, transaction });
};

const userAuthenticationQuery = async (body, Name) => {
	const data = await sequelize.models[Name].findOne({
		where: {
			[Op.or]: [{ username: body.user }, { email: body.user }],
		},
	});

	return data;
};

const userPasswordAuthenticationQuery = async (id, body) => {
	const data = await Users.findOne({ where: { id } });

	if (data?.password !== body.password || !data) {
		throw "PASS_NOT_VERIFIED";
	}

	return data;
};

const getOldPasswordQuery = async (id, transaction) => {
	return await Users.findOne({ where: { id }, transaction });
};

const updatePasswordQuery = async (id, password, transaction) => {
	return await Users.update({ password }, { where: { id }, transaction });
};

const getUserIdByEmail = async (email) => {
	return await Users.findOne({ where: { email } });
};

module.exports = {
	createUserQuery,
	updateUserQuery,
	getOldPasswordQuery,
	updatePasswordQuery,
	userAuthenticationQuery,
	userPasswordAuthenticationQuery,
	getUserIdByEmail,
};
