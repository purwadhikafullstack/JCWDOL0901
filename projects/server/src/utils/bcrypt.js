const bcrypt = require("bcrypt");

const getHashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);

	return console.log(hashPassword);
};

const verifyHashPassword = async (password, hashPassword) => {
	return await bcrypt.compare(password, hashPassword);
};

getHashPassword("unverified");
getHashPassword("gumigameciel");
getHashPassword("demouser");
getHashPassword("pelanggansmg");
getHashPassword("marynara");
getHashPassword("sansansan");
getHashPassword("andrealenny");
getHashPassword("budiharto");

module.exports = { getHashPassword, verifyHashPassword };
