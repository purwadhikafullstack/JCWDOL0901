const crypto = require("crypto");

const generateVerificationToken = (email, id) => {
	const bytes = crypto.randomBytes(16).toString("hex");
	const hash = crypto.createHash("sha256");

	hash.update(bytes + email + id + new Date());
	return hash.digest("hex");
};

module.exports = { generateVerificationToken };
