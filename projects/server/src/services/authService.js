const { sequelize, Users, Profiles } = require("../models/index.js");
const { Op } = require("sequelize");


const {
  startRegistrationErrorHandler,
  startFindErrorHandler,
  startVerificationErrorHandler,
} = require("../errors/serviceError.js");

const { createUserQuery, updateUserQuery } = require("../queries/Users.js");
const { createProfileQuery } = require("../queries/Profiles.js");
const { createVerificationTokenQuery, readUserTokensQuery } = require("../queries/User_tokens.js");
const { createUserVouchersAsReferralReward } = require("../queries/User_vouchers.js");
const { readAdminQuery, createAdminQuery } = require("../queries/Admins.js");
const { createBranchQuery } = require("../queries/Branches.js");
const { createInventoryQueryForNewBranch } = require("../queries/Inventories.js");

const { paginateData } = require("../helpers/queryHelper.js");

const { sendRegistrationVerificationEmail } = require("../utils/nodemailer.js");
const { generateJWToken } = require("../utils/jsonwebtoken.js");

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

  startUserProfileUpdate: async (body, Name) => {
    return new Promise(async (resolve, reject) => {
      try {
        const profile = await sequelize.models[Name].findOne({
          where: { name: body.name },
          include: [sequelize.models.Users],
        });

        if (!profile) {
          return reject({ code: 404, message: "Profile not found" });
        }

        const user = profile.Users;

        await Promise.all([
          profile.update({ name: body.name, gender: body.gender, birth: body.birth }),
          user.update({ email: body.email }),
        ]);

        return resolve({ message: "Update profile successful" });
      } catch (error) {
        return reject({ code: 500, message: "Internal Server Error" });
      }
    });
  },

  startGetUserProfile: async (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await Users.findOne({
          where: { id },
          include: {model: Profiles},
        });

        const profile = user.Profile;

        const data = {
          name: profile.name,
          gender: profile.gender,
          email: user.email,
          birth: profile.birth,
          referral_code: user.referral_code,
        };

        return resolve(data);
      } catch (error) {
		console.log("service get profile: ", error);
        return reject({ code: 500, message: "Internal Server Error" });
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
  startLoginAuthentication: async (body, Name) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await sequelize.models[Name].findOne({
          where: { email: body.email },
        });

        if (data?.password !== body.password || !data)
          return reject({ code: 400, message: "Wrong email or password!" });

        const token = await generateJWToken(data, "super" in data);
        return resolve({ message: "Login success!", token });
      } catch (error) {
        return reject({ code: 500, message: "Internal Server Error" });
      }
    });
  },
  startUserLoginAuthentication: async (body, Name) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await sequelize.models[Name].findOne({
          where: {
            [Op.or]: [{ username: body.user }, { email: body.user }],
          },
        });

        if (data?.password !== body.password || !data)
          return reject({ code: 400, message: "Wrong email or password!" });

        const token = await generateJWToken(data, "super" in data);

        return resolve({ message: "Login success!", token });
      } catch (error) {
        return reject({ code: 500, message: "Internal Server Error" });
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
};
