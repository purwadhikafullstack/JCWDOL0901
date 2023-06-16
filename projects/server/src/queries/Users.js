const { Users, sequelize } = require("../models/index.js");
const { Op } = require("sequelize");
const { generateReferralCode } = require("../helpers/referralCodeHelper.js");
const { generateJWToken } = require("../utils/jsonwebtoken.js");

const createUserQuery = async (body, transaction) => {
  const { email, username, phone, password, referrer } = body;

  const newUserData = await Users.create(
    { email, username, phone, password, referrer },
    { transaction }
  );

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

  if (data?.password !== body.password || !data)
    return reject({ code: 400, message: "Wrong email or password!" });

  const token = await generateJWToken(data, "super" in data);

  return { message: "Login success!", token };
};

module.exports = { createUserQuery, updateUserQuery, userAuthenticationQuery };
