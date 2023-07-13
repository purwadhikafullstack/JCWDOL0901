const bcrypt = require("bcrypt");

const getHashPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);
	console.log(hashPassword);
	return hashPassword;
};

const verifyHashPassword = async (password, hashPassword) => {
	return await bcrypt.compare(password, hashPassword);
};

getHashPassword("supergroseria");
getHashPassword("jakarta");
getHashPassword("semarang");
getHashPassword("surakarta");
getHashPassword("bandung");
getHashPassword("surabaya");

module.exports = { getHashPassword, verifyHashPassword };
