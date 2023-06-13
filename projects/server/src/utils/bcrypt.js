const bcrypt = require("bcrypt");

const getHashPassword = async password => {
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(password, salt);
	return hashPassword;
};

const verifyHashPassword = async (password, hashPassword) => {
	
	return await bcrypt.compare(password, hashPassword )
}

module.exports = { getHashPassword, verifyHashPassword };
