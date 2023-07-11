const { sequelize } = require("../models/index.js");

const {
	startRegistrationErrorHandler,
	startFindErrorHandler,
	startVerificationErrorHandler,
	startUpdatePasswordErrorHandler,
	startAdminAuthenticationErrorHandler,
	startUserAuthenticationErrorHandler,
	startConfirmPasswordErrorHandler,
} = require("../errors/serviceError.js");

const {
	createUserQuery,
	updateUserQuery,
	getOldPasswordQuery,
	updatePasswordQuery,
	userAuthenticationQuery,
	userPasswordAuthenticationQuery,
	getUserIdByEmail,
} = require("../queries/Users.js");
const { createProfileQuery } = require("../queries/Profiles.js");
const { createVerificationTokenQuery, readUserTokensQuery } = require("../queries/User_tokens.js");
const { createUserVouchersAsReferralReward } = require("../queries/User_vouchers.js");
const { readAdminQuery, createAdminQuery, adminAuthenticationQuery } = require("../queries/Admins.js");
const { createBranchQuery } = require("../queries/Branches.js");
const { createInventoryQueryForNewBranch } = require("../queries/Inventories.js");

const { paginateData } = require("../helpers/queryHelper.js");

const { sendRegistrationVerificationEmail, sendResetPasswordVerificationEmail } = require("../utils/nodemailer.js");
const { generateJWToken, generateResetPasswordJWToken, verifyJWToken } = require("../utils/jsonwebtoken.js");
const { verifyHashPassword } = require("../utils/bcrypt.js");
const { Op } = require("sequelize");

const userDatabaseGeneration = async (body, transaction) => {
	const User = await createUserQuery(body, transaction);

	if (User.referrer) await createUserVouchersAsReferralReward(User.id, User.referrer, transaction);

	await createProfileQuery(body, User.id, transaction);

	return await createVerificationTokenQuery(User, transaction);
};

const adminDatabaseGeneration = async (body, transaction) => {
	const Admin = await createAdminQuery(body, transaction);
	const Branch = await createBranchQuery(body, Admin.id, transaction);

	await createInventoryQueryForNewBranch(Branch, transaction);
};

const checkAndUpdatePassword = async (id, body, transaction) => {
	const User = await getOldPasswordQuery(id, transaction);

	// const isOldPasswordVerified = verifyHashPassword(body.old_password, User.password);
	const isOldPasswordVerified = body.old_password === User.password;

	if (!isOldPasswordVerified) throw "PASS_NOT_VERIFIED";
	if (User.password === body.password) throw "PASS_CANNOT_SAME";

	await updatePasswordQuery(id, body.password, transaction);
};

module.exports = {
	startUserRegistration: async (body) => {
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
	startForgotPasswordVerification: async (body) => {
		return new Promise(async (resolve, reject) => {
			try {
				const User = await getUserIdByEmail(body.email);
				if (!User) throw "EMAIL_NOT_FOUND";
				const token = await generateResetPasswordJWToken(User.id);

				await sendResetPasswordVerificationEmail(User, token);

				return resolve("Email has been sent, check your email!");
			} catch (error) {
				return reject(await startVerificationErrorHandler(error));
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

	startAdminLoginAuthentication: async (body, Name) => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await adminAuthenticationQuery(body, Name);

				if (result?.password !== body.password || !result)
					return reject({ code: 400, message: "Wrong email or password!" });

				// if (!(await verifyHashPassword(body.password, data?.password)) || !data)
				// 	return reject({ code: 400, message: "Wrong email or password!" });

				const token = await generateJWToken(result, "super" in result);

				return resolve({ message: "Login success!", token });
			} catch (error) {
				console.log(error);
				return reject(await startAdminAuthenticationErrorHandler(error));
			}
		});
	},
	startUserLoginAuthentication: async (body, Name) => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await userAuthenticationQuery(body, Name);

				if (result?.password !== body.password || !result)
					return reject({ code: 400, message: "Wrong email or password!" });

				const token = await generateJWToken(result, "super" in result);

				return resolve({ message: "Login success!", token });
			} catch (error) {
				console.log(error);
				return reject(await startUserAuthenticationErrorHandler(error));
			}
		});
	},
	startAdminRegistration: async (body) => {
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
	startVerification: async (token) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				const User_token = await readUserTokensQuery(token, "verify_account");
				await updateUserQuery({ verified: true }, { id: User_token.user_id }, transaction);
				await User_token.destroy(transaction);
				await transaction.commit();
				return resolve("Verification success");
			} catch (error) {
				await transaction.rollback();
				return reject(await startVerificationErrorHandler(error));
			}
		});
	},
	startUpdatePassword: async (id, body) => {
		return new Promise(async (resolve, reject) => {
			const transaction = await sequelize.transaction();
			try {
				await checkAndUpdatePassword(id, body, transaction);
				await transaction.commit();
				return resolve("Update password success!");
			} catch (error) {
				await transaction.rollback();
				return reject(await startUpdatePasswordErrorHandler(error));
			}
		});
	},
	startConfirmPassword: async (body, id) => {
		return new Promise(async (resolve, reject) => {
			try {
				await userPasswordAuthenticationQuery(id, body);

				// if (!(await verifyHashPassword(body.password, result?.password)) || !result) {
				// 	return reject({ code: 400, message: "Wrong password!" });
				// }

				return resolve({ message: "Login success!" });
			} catch (error) {
				return reject(await startConfirmPasswordErrorHandler(error));
			}
		});
	},
	startResetPassword: async (body, token) => {
		return new Promise(async (resolve, reject) => {
			try {
				const verifiedToken = await verifyJWToken("Bearer " + token, process.env.JWT_RESET_PASSWORD_SECRET_KEY);
				const { id } = verifiedToken;
				await updatePasswordQuery(id, body.password);
				return resolve("Reset password success");
			} catch (error) {
				return reject(await startVerificationErrorHandler(error));
			}
		});
	},
};
