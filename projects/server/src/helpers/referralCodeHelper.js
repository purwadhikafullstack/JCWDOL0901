const generateBase36Code = id => id.toString(36).toUpperCase().padStart(6, "0");
const generateUsernameCode = username => username.substring(0, 3).toUpperCase();

const generateReferralCode = async (username, id) => {
	const base36Code = await generateBase36Code(id);
	const usernameCode = await generateUsernameCode(username);

	return `${usernameCode}-${base36Code}`;
};

module.exports = { generateReferralCode };
