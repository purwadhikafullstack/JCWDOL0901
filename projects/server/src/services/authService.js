const { sequelize } = require("../models/index.js");

const { startRegistrationErrorHandler } = require("../errors/serviceError.js");

const { createUserQuery } = require("../queries/Users.js");
const { createProfileQuery } = require("../queries/Profiles.js");
const { createVerificationTokenQuery } = require("../queries/User_tokens.js");

const { sendRegistrationVerificationEmail } = require("../utils/nodemailer.js");

const userDatabaseGeneration = async (body, transaction) => {
	const User = await createUserQuery(body, transaction);
	await createProfileQuery(body, User.id, transaction);
	return await createVerificationTokenQuery(User, transaction);
};

module.exports = {
	startUserRegistration: async body => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const { token } = await userDatabaseGeneration(body, transaction);
				await sendRegistrationVerificationEmail(body.email, token);
				await transaction.commit();
				return resolve("Registration success, check your email!");
			} catch (error) {
				console.log(error);
				await transaction.rollback();
				return reject(await startRegistrationErrorHandler(error));
			}
		});
	},
};
