const { sequelize } = require("../models/index.js");

const { startRegistrationErrorHandler, startVerificationErrorHandler } = require("../errors/serviceError.js");

const { createUserQuery, updateUserQuery } = require("../queries/Users.js");
const { createProfileQuery } = require("../queries/Profiles.js");
const {	createVerificationTokenQuery, readUserTokensQuery } = require("../queries/User_tokens.js");
const {	createUserVouchersAsReferralReward } = require("../queries/User_vouchers.js");
const { sendRegistrationVerificationEmail } = require("../utils/nodemailer.js");

const userDatabaseGeneration = async (body, transaction) => {
	const User = await createUserQuery(body, transaction);

	if (User.referrer)
		await createUserVouchersAsReferralReward(User.id, User.referrer, transaction);

	await createProfileQuery(body, User.id, transaction);
	return await createVerificationTokenQuery(User, transaction);
};

module.exports = {
	startUserRegistration: async body => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const { token } = await userDatabaseGeneration(body, transaction);
				await sendRegistrationVerificationEmail(body, token);
				await transaction.commit();
				return resolve("Registration success, check your email!");
			} catch (error) {
				await transaction.rollback();
				return reject(await startRegistrationErrorHandler(error));
			}
		});
	},
	startVerification: async token => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const User_token = await readUserTokensQuery(token, "verify_account");
				await updateUserQuery({ verified: true }, { id: User_token.user_id }, transaction);
				await User_token.destroy(transaction);
				await transaction.commit();
				return resolve("Verification success");
			} catch (error) {
				await transaction.rollback()
				return reject(await startVerificationErrorHandler(error));
			}
		});
	},
};
