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

const updateAvatarQuery = async (file, user_id) => {
	// console.log(file);
	// console.log(user_id);
	// const avatar = file ? file.path : undefined;
	return await Profiles.update({ avatar: file }, { where: { user_id } });
};

const getAvatarQuery = async (id) => {
	const user = await Profiles.findOne({
		where: { id },
	});

	const data = {
		avatar: user.avatar,
	};
	return data;
};

module.exports = { createProfileQuery, getUserProfileQuery, updateUserProfileQuery, updateAvatarQuery, getAvatarQuery };
