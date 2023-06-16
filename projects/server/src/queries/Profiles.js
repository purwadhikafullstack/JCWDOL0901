const { Profiles, Users } = require("../models/index.js");

const createProfileQuery = async (body, user_id, transaction) => {
  const { name } = body;
  return await Profiles.create({ name, user_id }, { transaction });
};

const getUserProfileQuery = async (id) => {
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
  return data;
};

const updateUserProfileQuery = async (body, id) => {
  const user = await Users.findOne({
    where: { id },
    include: { model: Profiles },
  });

  const profile = user.Profile;

  await Promise.all([
    profile.update({ name: body.name, gender: body.gender, birth: body.birth }),
    user.update({ email: body.email }),
  ]);

  return { message: "Update profile successful", user };
};

module.exports = { createProfileQuery, getUserProfileQuery, updateUserProfileQuery };
