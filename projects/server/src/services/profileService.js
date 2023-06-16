const { Users, Profiles } = require("../models/index.js");

module.exports = {
  startUserProfileUpdate: async (body, id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await Users.findOne({
          where: { id },
          include: { model: Profiles },
        });

        const profile = user.Profile;

        await Promise.all([
          profile.update({ name: body.name, gender: body.gender, birth: body.birth }),
          user.update({ email: body.email }),
        ]);

        // const data = {profile, user};
        // console.log("data: ", data);
        return resolve({ message: "Update profile successful", user });
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
          include: { model: Profiles },
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
        return reject({ code: 500, message: "Internal Server Error" });
      }
    });
  },
};
