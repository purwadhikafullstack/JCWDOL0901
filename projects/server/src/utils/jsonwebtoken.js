const jwt = require("jsonwebtoken");

const generateUserJWToken = async (payload) => {
  const expiresIn = process.env.JWT_USER_TOKEN_EXPIRATION_TIME;
  const secretKey = process.env.JWT_USER_SECRET_KEY;

  return await jwt.sign(payload, secretKey, { expiresIn });
};

const generateAdminJWToken = async (payload) => {
  const expiresIn = process.env.JWT_ADMIN_TOKEN_EXPIRATION_TIME;
  const secretKey = process.env.JWT_ADMIN_SECRET_KEY;

  return await jwt.sign(payload, secretKey, { expiresIn });
};

const generateUserJWTPayload = (data) => {
  return { id: data.id, verified: data.verified };
};

const generateAdminJWTPayload = (data) => {
  return { id: data.id, super: data.super };
};

const generateJWToken = async (data, isAdmin) => {
  if (isAdmin) return await generateAdminJWToken(generateAdminJWTPayload(data));

  return generateUserJWToken(generateUserJWTPayload(data));
};

module.exports = { generateJWToken };
