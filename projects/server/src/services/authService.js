const { sequelize } = require("../models/index.js");

const {
	startRegistrationErrorHandler,
	startFindErrorHandler,
} = require("../errors/serviceError.js");

const { createUserQuery } = require("../queries/Users.js");
const { createProfileQuery } = require("../queries/Profiles.js");
const { createVerificationTokenQuery } = require("../queries/User_tokens.js");
const {
	createUserVouchersAsReferralReward,
} = require("../queries/User_vouchers.js");
const { readAdminQuery, createAdminQuery } = require("../queries/Admins.js");
const { createBranchQuery } = require("../queries/Branches.js");
const {
	createInventoryQueryForNewBranch,
} = require("../queries/Inventories.js");

const { paginateData } = require("../helpers/queryHelper.js");

const { sendRegistrationVerificationEmail } = require("../utils/nodemailer.js");

const userDatabaseGeneration = async (body, transaction) => {
	const User = await createUserQuery(body, transaction);

	if (User.referrer)
		await createUserVouchersAsReferralReward(
			User.id,
			User.referrer,
			transaction
		);

	await createProfileQuery(body, User.id, transaction);
	return await createVerificationTokenQuery(User, transaction);
};

const adminDatabaseGeneration = async (body, transaction) => {
	const Admin = await createAdminQuery(body, transaction);
	const Branch = await createBranchQuery(body, Admin.id, transaction);

	await createInventoryQueryForNewBranch(Branch, transaction);
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
	startFindAdmins: async (filter, order, page) => {
		return new Promise(async (resolve, reject) => {
			try {
				const Admin = await readAdminQuery(filter, order);
				const paginatedData = await paginateData(Admin, page);

				return resolve(paginatedData);
			} catch (error) {
				return reject(await startFindErrorHandler(error));
			}
		});
	},
	startAdminRegistration: async body => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				await adminDatabaseGeneration(body, transaction);

				await transaction.commit();
				return resolve("Registration success!");
			} catch (error) {
				await transaction.rollback();
				return reject(await startRegistrationErrorHandler(error));
			}
		});
	},
};
